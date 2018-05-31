import React, { Component } from 'react';


class WeatherListItem extends Component {
    constructor(props) {
        super(props);
        this.showCurrentDay= this.showCurrentDay.bind(this);
    }

    showCurrentDay() {
        const index = this.props.index;
        const onDayClick = this.props.onDayClick;
        onDayClick(index);
    }
    render() {
        const { day } = this.props;
        const date = new Date(day.dt * 1000);
        const img = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;

        return (
            <div className="weather-list-item" onClick={this.showCurrentDay}>

                <h2> <img src={img} alt={day.weather[0].description} /> {date.getMonth() + 1} / {date.getDate()}</h2>
                <h3>{day.temp.min.toFixed(1)}&deg;F &#124; {day.temp.max.toFixed(1)}&deg;F</h3>
            </div >
        );
    }
}

export default WeatherListItem;