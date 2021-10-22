import React from 'react'
import char from '../characters/character.json'
import './Info.css'

export default (props) => {
    const charObj = JSON.parse(JSON.stringify(char))
    const info = charObj.info[props.dado]

    const keys = Object.keys(charObj.info).filter(e => e === props.dado)

    return (
        <div className={'which'} id={keys}>{ keys == 'classe' ? `${info} LvL ${charObj.info.nivel}` : info }</div>
    )
}