import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { SmurfContext } from "../context/smurfContext";
import Smurf from "./smurf";

const SmurfList = () => {
  const [smurf, setSmurf] = useContext(SmurfContext);
  // axios.get could go here...
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        const mySmurf = res.data;
        console.log(mySmurf);
        setSmurf(mySmurf);
      })

      .catch((err) => console.log(err));
   
  }, []);
  
  return (
      <div>
        {smurf.map((smurf) => (
        
          <Smurf smurf={smurf}/>
        ))}
      </div>
  )
};

export default SmurfList;
