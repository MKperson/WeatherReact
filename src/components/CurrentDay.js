import React, { Component } from 'react';


class CurrentDay extends Component {
    getWeekDay(date) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday']
        const weekday = date.getDay();
        console.log(weekday);
        return dayNames[weekday];
    }
    render() {
        const day = this.props.day;
        const date = new Date(day.dt * 1000);
        const weekday = this.getWeekDay(date);
        const city = this.props.city;

        const w = day.weather[0];
        const img = `http://openweathermap.org/img/w/${w.icon}.png`

        return <div className="current-day">
            <h1 className="day-header">{weekday} in {city.name}</h1>
            <div className="weather">
                <p><img src={img} alt={w.description} />
                    {w.description} </p>
            </div>
            <div className="details flex-parent">
                <div className="temperature-breakdown">
                    <p>Morning Temperature: {day.temp.morn} &deg;F</p>
                    <p>Day Temperature: {day.temp.day} &deg;F</p>
                    <p>Evening Temperature: {day.temp.eve} &deg;F</p>
                    <p>Night Temperature: {day.temp.night} &deg;F</p>
                </div>
            </div>
        </div>;
    }

}

export default CurrentDay;