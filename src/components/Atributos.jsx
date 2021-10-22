import React from "react";
import './Atributos.css'

import char from '../characters/character.json'


export default (props) => {
    const charObj = JSON.parse(JSON.stringify(char))
    const atributo = charObj.atributos[props.dado]
    const extended = {
        'str': 'Força',
        'dex': 'Destreza',
        'con': 'Constituição',
        'wis': 'Sabedoria',
        'int': 'Inteligência',
        'cha': 'Carisma'
    }
    const noname = extended[Object.keys(charObj.atributos).filter(e => e === props.dado)]
    
    return (
        <div>
            <div className="attContainer">
                <div className="attBig">
                    {atributo}
                <div className="what">{noname}</div>
                    <div className="attMod">
                        {Math.floor((atributo - 10)/2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

// return arr.map((element, index) => {
//     return (
//         <div key={"Key-"+index}>{`${element[0]}: ${element[1]}`}</div>
//     )
// })