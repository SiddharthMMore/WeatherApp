import React from 'react';
import { connect } from 'react-redux';
import CustomSparkline from '../components/CustomSparkline';
import GoogleMap from '../components/GoogleMap';
const WeatherList = ({ weather }) => {
  const getList = (currentCityList, param) => {
    return currentCityList.map((list) => {
      return list.main[param];
    });
  };
  const renderWeather = () => {
    return weather.map((current) => {
      const temperatures = getList(current.list, 'temp');
      const pressures = getList(current.list, 'pressure');
      const humidities = getList(current.list, 'humidity');
      console.log(temperatures, pressures, humidities);
      return (
        <tr key={current.city.id}>
          <td>
            {/* <GoogleMap
              lon={current.city.coord.lon}
              lat={current.city.coord.lat}
            /> */}
            {current.city.name}
          </td>
          <td>
            <CustomSparkline data={temperatures} color="red" />
          </td>
          <td>
            <CustomSparkline data={pressures} color="blue" />
          </td>
          <td>
            <CustomSparkline data={humidities} color="green" />
          </td>
        </tr>
      );
    });
  };
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temp</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>{renderWeather()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherList);
