import React, {Component} from "react";
import {Link} from "react-router-dom";

class Form extends Component{
    state = {
        name : "",
        place : "",
        deceasedPersonAge : "",
        deceasedPersonName : "",
        deceasedPersonSex : ""
    }

    change = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.update(this.state)
    }

    render(){
        return (
            <div>
                <label>Name : </label>
                <input name = "name" value={this.state.name} onChange={e =>this.change(e)}/>
                <br/>
                <label>Place : </label>
                <select name= "place" onChange={e => this.change(e)}>
                    <option defaultValue>Select Place</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                </select>
                <br/>
                <label>Deceased Person Age : </label>
                <input name = "deceasedPersonAge" value={this.state.deceasedPersonAge} onChange={e =>this.change(e)}/>
                <br></br>
                <label>Deceased Person Name : </label>
                <input name = "deceasedPersonName" value={this.state.deceasedPersonName} onChange={e =>this.change(e)}/>
                <br></br>
                <label>Deceased Person Sex : </label>
                <select name= "deceasedPersonSex" defaultValue="male" onChange={e => this.change(e)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <br/>
                <Link to="/">
                    <button onClick={this.onSubmit}>Submit</button>
                </Link>
            </div>
        )
    }
}

export default Form