import React, {useState, createContext} from 'react'

const initialSmurf =[ {
    name:'',
    age:'',
    height:'',
    id: new Date()

}]

export const SmurfContext = createContext()

export const SmurfProvider = (props) => {

    const [smurf, setSmurf] = useState([initialSmurf])

    return(

        <SmurfContext value={[smurf, setSmurf]}>
            {props.children}
        </SmurfContext>
    );
}
