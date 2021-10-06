import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import StartPage from "./components/StartPage/StartPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Video from "./components/Video/Video";
import Audio from './components/Audio/Audio'
import Photo from "./components/Photo/Photo";
import Movies from "./components/Movies/Movies";
import Music from "./components/Music/Music";
import Books from "./components/Books/Books";
import Location from './components/Location/Location'
import Wall from "./components/Wall/Wall";

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/" component={StartPage}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/recorder" component={Video} />
            <Route path="/wall" component={Wall} />
            <Route path="/audio" component={Audio} />
            <Route path="/photo" component={Photo} />
            <Route path="/movies" component={Movies} />
            <Route path="/music" component={Music} />
            <Route path="/books" component={Books} />
            <Route path="/location" component={Location} />
        </Switch>
      </Router>
  );
}

export default App;
