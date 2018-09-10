import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

 class WeatherList extends Component {
   renderWeather(cityData){
     const temps = cityData.list.map(weather =>
      weather.main.temp);
     // console.log(temps)
     return (
       <tr key={cityData.city.id}>
        <td > {cityData.city.name}</td>
          <Sparklines height={120} width={180}
            data={temps}>
            <SparklinesLine  color="red" />
          </Sparklines>
       </tr>
     )
   }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City</th>
            <th> Temp</th>
            <th> Pressure</th>
            <th> Humidity</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>

    );

  }
}

function mapStateToProps(state){
  return {weather: state.weather}
}
export default connect (mapStateToProps)(WeatherList);
