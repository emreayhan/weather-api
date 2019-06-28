import React, { Component } from "react";
import { connect } from "react-redux";
import { requestData } from "../store/actions/weatherActions";
// import "./details.scss";
class Details extends Component {
  state = {
    data: {},
    main: {},
    weather: "",
    wind: {},
    sys: {}
  };

  async componentDidMount() {
    await this.props.requestWeather();
    console.log(this.props.response);
    await this.props.response.then(res =>
      this.setState({
        data: res.data,
        main: res.data.main,
        sys: res.data.sys,
        weather: res.data.weather.map(el => el.main),
        wind: res.data.wind
      })
    );
    console.log(this.state.weather);
  }

  render() {
    return (
      <div className="details">
        <h2>
          {" "}
          City : {this.state.data.name}, {this.state.sys.country}
        </h2>
        <div> Weather : {this.state.weather}</div>
        <div> Temparature : {this.state.main.temp}</div>
        <div> Pressure : {this.state.main.pressure}</div>
        <div> Humidity : {this.state.main.humidity}</div>
        <div> Wind Speed: {this.state.wind.speed}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ response: state.weatherResponse });

const mapDispatchToProps = (dispatch, props) => {
  return {
    requestWeather: () => {
      dispatch(requestData(props.match.params.cityName));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
