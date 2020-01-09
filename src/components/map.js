import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  render() {console.log(this.props.latitude);
    return (
        
        
      <Map google={this.props.google} zoom={10} initialCenter={{ lat:this.props.latitude,lng: this.props.longitude}} 
         
      
          center={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}
          >
           
        <Marker position={{ lat: this.props.latitude, lng: this.props.longitude  }} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>
     
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDHh9pciNFyvd5fulTpvrgnpV8k7KP3mqA")
})(MapContainer)