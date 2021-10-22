import './index.css'
import ReactDOM from 'react-dom'

import char from './characters/character.json'
import Atributos from './components/Atributos'
import Pericias from './components/Pericias'
import Info from './components/Info'

const charObj = JSON.parse(JSON.stringify(char))
ReactDOM.render(
  <>
    <div id='atributos'>
      <Atributos dado='str' />
      <Atributos dado='dex' />
      <Atributos dado='con' />
      <Atributos dado='int' />
      <Atributos dado='wis' />
      <Atributos dado='cha' />
    </div>
    <div id='info'>
      <Info dado='nome' />
      <Info dado='classe' />
      {/* <Info dado='nivel' /> */}
      <Info dado='antecedente' />
      <Info dado='nomeJogador' />
      <Info dado='raca' />
      <Info dado='tendencia' />
      <Info dado='expPoints' />
    </div>
    <Pericias />
  </>
  , document.getElementById('root')
)