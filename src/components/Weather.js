import React from "react";


class Weather extends React.Component{
    render(){
        return(
            <div>

               {this.props.city && this.props.country && <p>location : {this.props.city},{this.props.country}</p>}
               {this.props.tempreature && <p>tempreature : {this.props.tempreature}</p>}
               {this.props.humidity &&  <p>humidity : {this.props.humidity}</p>}               
               {this.props.description && <p>condition : {this.props.description}</p>}
               {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}


export default Weather;