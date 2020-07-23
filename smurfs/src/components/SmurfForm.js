import React, { useState,useContext } from "react";
import {SmurfContext} from '../context/smurfContext'

// const initialSmurf = [
//   {
//     name: "",
//     age: "",
//     height: "",
//     id: new Date(),
//   },
// ];

const AddSmurf = () => {
  const [smurfInfo, setSmurfInfo] = useState();
  const [smurf, setSmurf] = useContext(SmurfContext)

  const changeHandler = (e) => {
    setSmurfInfo(e.target.value);
  };
  const smurfSubmit = (e) => {
    e.preventDefault();
    // axios post might go in here?
    setSmurf();
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
      <button type='submit'>Add a Smurf!</button>
    </form>
  );
};

export default AddSmurf
