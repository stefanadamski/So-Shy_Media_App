import React, { useState } from "react";
import { connect } from "react-redux";
import { addPosts } from "../../redux/reducer";
import 'react-simple-hook-modal/dist/styles.css';
import swal from 'sweetalert';
import {
    ModalProvider,
    Modal,
    useModal,
    ModalTransition,
} from 'react-simple-hook-modal';
import {useHistory} from "react-router";

const mapStateToProps = (state) => {
    return {
        posts: state,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (obj) => dispatch(addPosts(obj)),
    };
};

const Posts = (props) => {
    let history = useHistory();
    const [like, setLike] = useState(0);
    const [love, setLove] = useState(0);

    const handleLocation = (e) => {
        e.preventDefault();
        history.push("/location");
    }
    const handleLikes = (e) => {
        e.preventDefault();
        setLike(like +  Math.floor(Math.random() * (10 - 1 + 1) + 1));
        if (like >= 1 && like < 11) {
            swal("How fast... And you like them all at once!", "Make it 100 and get a badge!");
        }
        if (like >= 100 && like < 120) {
            swal("You got a Liker Badge!!");
        }
    }
    const handleLove = (e) => {
        e.preventDefault();
        setLove(love + Math.floor(Math.random() * (10 - 1 + 1) + 1));
        if (love >= 10 && love < 20) {
            swal("You got over 10 hearts!", "...keep going!");
        }
        if (love >= 100 && love < 120) {
            swal("You got a Lover Badge!!");
        }
    }
    const MyModal = () => {
        const { isModalOpen, openModal, closeModal } = useModal();
        console.log("props",props);
        const [post, setPost] = useState("");
        const [validate, setValidate] = useState(true);

        const add = () => {
            if (post === "") {
                setValidate(false);
            } else {
                setValidate(true);
                props.addPost({
                    id: Math.floor(Math.random() * 1000),
                    item: post,
                });
                setPost("");
            }
        };
        const handleChange = (e) => {
            setPost(e.target.value);
        };

        return (
            <div className='circle' onClick={openModal}>
                <div className="overview_icon5"> </div>
                <div className='create_post'> Create a post! </div>
                <Modal
                    id="facebook_modal"
                    isOpen={isModalOpen}
                    modalClassName="modalStyle"
                    transition={ModalTransition.BOTTOM_UP}
                >
                    <button onClick={closeModal}><div className="closeModal"> </div></button>
                    <div className="avatar"> </div>
                    <form className='modalForm'>
                        <label>
                            <textarea name="name"
                                      value={post}
                                      className="postInput"
                                      placeholder='Your post'
                                      onChange={(e) => handleChange(e)}/>
                        </label>
                        {validate === false && (<><p className='inputAlert'> Write at least one word:) </p> </>)}
                        <button type="submit"
                                value="Send"
                                className="modal_button"
                                onClick={() => add()}
                        > Submit </button>
                    </form>
                </Modal>
            </div>
        );
    };
    return (
        <div className='container'>
            <div className='wall_buttons'>
                <ModalProvider>
                    <MyModal/>
                </ModalProvider>
                <div className='circle' onClick={(e) => handleLocation(e)}>
                    <div className="find_yourself"> </div>
                    <p className='create_post'>Where are you?!</p>
                </div>
            </div>
            <div className='post_wall'>
                {props.posts.length > 0 &&
                props.posts.map((item) => {
                    return <div className='container post'>
                        <div className="post_message">
                        <header>
                            <div className="post-user">
                                <div className="post_user_avatar"> </div>
                                <div className="post_user_nickname">
                                    <span>Stefan</span>
                                </div>
                            </div>
                        </header>
                        <div key={item.id} className='post_content'>{item.item}</div>
                          <div>
                              <div className="like_and_love">
                                  <div className='like_bar'>
                                      <p className="like_counter"> {like} </p>
                                      <div className="like_yourself" onClick={handleLikes}> </div>
                                  </div>
                                  <div className='like_bar'>
                                      <p className="love_counter"> {love} </p>
                                      <div className="love_yourself" onClick={handleLove}>
                                      </div>
                                  </div>
                              </div>
                          </div>


                        </div>
                    </div>;
                })}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);


