import React, {Component} from "react"
import {Link} from "react-router-dom"

class Mobile extends Component{

    state = {
        phoneNumber : ""
    }

    sendPhone = () => {
        this.props.update(this.state)
    }

    render(){
        return (
            <div>
                <label>
                    Enter Mobile No
                </label>
                <br/>
                <input type="text" value={this.state.phoneNumber} onChange={e => this.setState({phoneNumber: e.target.value})}></input>
                <br/>
                <Link to="/form">
                <button onClick={this.sendPhone}>Next</button>
                </Link>
            </div>
        );
    }
}

export default Mobile

