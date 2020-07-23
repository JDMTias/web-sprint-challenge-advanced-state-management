import React, { useState, useContext } from "react";
import { SmurfContext } from "../context/smurfContext";
import Axios from "axios";

const initialSmurf = {
  name: "",
  age: "",
  height: "",
};

const AddSmurf = () => {
  const [smurfInfo, setSmurfInfo] = useState(initialSmurf);
  const [smurf, setSmurf] = useContext(SmurfContext);

  const changeHandler = (e) => {
    setSmurfInfo({ ...smurfInfo, [e.target.name]: e.target.value });
  };
  const smurfSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3333/smurfs", 
      smurfInfo
    )
    .then(res => {
      console.log(res)
      setSmurf(res.data)
    })
  };

  return (
    <form onSubmit={smurfSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={smurfInfo.name}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        value={smurfInfo.age}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="height"
        name="height"
        value={smurfInfo.height}
        onChange={changeHandler}
      />
      <button type="submit">Add a Smurf!</button>
    </form>
  );
};

export default AddSmurf;
