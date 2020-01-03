import React, { Component } from 'react';

class Weather extends Component {
    render () {
        return (
            <div>
            {this.props.city && this.props.country && <p className="stein">Location: {this.props.city} {this.props.country}</p>}
            {this.props.temperature && <p className="stein">Temperature: {this.props.temperature}</p>}
            {this.props.windSpeed && <p className="stein">Wind Speed: {this.props.windSpeed}</p>}
            {this.props.description && <p className="stein">Conditions: {this.props.description}</p>}
            {this.props.error && <p className="stein">{this.props.error}</p>}
            </div>
        )
    }
}

export default Weather;