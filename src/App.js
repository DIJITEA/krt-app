import React from "react";
import Field from "./UI/Field/Field";
import MOR from "./Logic/logic";

class App extends React.Component{
  render(){
    return(
      <div>
     <Field />
     <MOR />
      </div>
    );
  }
}
export default App;