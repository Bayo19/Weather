import React, {Component} from 'react'
import '../App.css';

class Form extends Component {
    render() {

        return (
            <form className="form" onSubmit={this.props.getWeather}>
                <input className="first-input" type="text" name="city" placeholder="city"/>
                <input className="second-input"type="text" name="country" placeholder="country"/>
                <button className="btn">Get weather</button>
            </form>
        )
    }
}

export default Form;