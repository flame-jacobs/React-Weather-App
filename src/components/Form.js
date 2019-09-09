import React from "react";

const Form = props => {
  return (
    <div>
      {/* error shows if form is not completed  */}
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
          <div>
            {/* inputs for city and countries */}
            <input placeholder="City" name="city"/>
            <br/>
            <input placeholder="Country"name="country"/>
            <br/>
            <button>show Weather</button>
          </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div>
      {/* error that shows if iit is not entered in the enput */}
      Please Enter City and Country...!
    </div>
  );
};

export default Form;