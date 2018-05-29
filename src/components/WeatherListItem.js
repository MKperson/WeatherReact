import React, { Component } from 'react';


class WeatherListItem extends Component {
    render() {
        const { day } = this.props;
        const date = new Date(day.dt * 1000);
        const img = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;

        return (
            <div className="weather-list-item">
            
                <h2> <img src={img} alt={day.weather[0].description}/> {date.getMonth() + 1} / {date.getDate()}</h2>               
                <h3>{day.temp.min.toFixed(1)}&deg;F &#124; {day.temp.max.toFixed(1)}&deg;F</h3>
            </div >
        );
    }
}

export default WeatherListItem;