import React, {Component} from "react";
import {Link} from "react-router-dom";

class CremationDetails extends Component{
    state = {
        cremationLocation : "",
        slot : ""
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
            <form>
                <label>Cremation Location : </label>
                <select name= "cremationLocation" onChange={e => this.change(e)}>
                    <option defaultValue>Select Place</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                </select>
                <br/>
                <label>Slot : </label>
                <select name= "slot" onChange={e => this.change(e)}>
                    <option defaultValue>10 AM</option>
                    <option value="12 PM">Chennai</option>
                    <option value="2 PM">Kolkata</option>
                </select>
                <br/>                
                <Link to="/cremation-details">
                    <button onClick={e => this.onSubmit(e)}>Book</button>
                </Link>
            </form>
        )
    }
}

export default CremationDetails