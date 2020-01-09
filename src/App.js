import React from "react";
import Title from "./components/Title";
import Form from "./components/form";
import Weather from "./components/Weather";
import Map from "./components/map";
const Api_key="ea426e0c7a9bdd2b37ee16d9b7f45aaa";


class app extends React.Component{

  state ={
    tempreature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    latitude:6.839670,
    longitude:79.875969,
    error:undefined  
  }
 
  getWeather = async (e) =>{
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`);

    const data = await api_call.json();
    
    
    if(city && country){
    console.log(data)
;

    this.setState({
      tempreature: data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      latitude:data.coord.lat,
      longitude:data.coord.lon,
      error:""
    });
  } else{
    this.setState({
    tempreature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    latitude:undefined,
    longitude:undefined,
    error:"please enter values"
    });
  }
}

render(){
  return(
    <>
    <div>
      <Title/>
      <Form getWeather={this.getWeather}/>

      <Weather 
      tempreature={this.state.tempreature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      latitude={this.state.latitude}
      longitude={this.state.longitude}
      error={this.state.error}
      />
    </div>
    <Map 
     latitude={this.state.latitude}
     longitude={this.state.longitude}
    />
    <div>

    </div>
    </>
  );

}

};  





export default app;


