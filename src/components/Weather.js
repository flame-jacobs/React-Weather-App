import React from "react";


const Weather = props => {
  return (
    <div className="box">
        <h1>{props.cityname}</h1>

        {/* gets the celsius */}
        {props.temp_celsius ? (
          <h1>{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* shows the max and min tempreture */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* describe the weather */}
        <h4>
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    // getting the max and min tempreture
    return (
      <h3>
        <span>{min}&deg;</span>
        <span>{max}&deg;</span>
      </h3>
    );
  }
}