import './App.css';
import Form from "./components/Form"
import Mobile from "./components/Mobile"
import CremationDetails from "./components/CremationDetails"
import React, {Component} from "react";
import DetailsDisplay from "./components/DetailsDisplay";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component{

  state = {}

  update = values => {
    this.setState(
      {
        ...values
      }
    )
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Mobile update={this.update} />}/>
            <Route path="/form" render={() => <Form update={this.update}/>}/>
            <Route path="/cremation-details" render={() => <CremationDetails update={this.update}/>}/>
            <Route path="/details-display" render = {()=><DetailsDisplay data={this.state}/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
