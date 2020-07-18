import React, { useState,useContext } from 'react'
import axios from 'axios'
import {SmurfContext} from '../context/smurfContext'
import Smurf from './smurf'




const SmurfList = () => {
    const [smurf, setSmurf] = useContext(SmurfContext)

    return(
        <div>
            <h1></h1>
            {smurf.map(smurf => (
                <Smurf/>))}
        </div>
    )
}

export default SmurfList