import React, {useContext} from 'react'
import {SmurfContext} from '../context/smurfContext'

const Smurf = ({smurf}) => {

    // const [smurf, setSmurf] = useContext(SmurfContext)
    console.log(smurf)

    return(
        <div>
            <h3>Name:{smurf.name}</h3>
            <p>age:{smurf.age}</p>
            <p>Height:{smurf.height}</p>
        </div>
    )
}

export default Smurf