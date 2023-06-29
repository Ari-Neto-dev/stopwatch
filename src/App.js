import React,{Component} from 'react';
import './style.css'
class App extends Component{
  render(){
    return(
      <div className='container'>
        <img src={require('./assets/cronometro.png')} alt="" className='img'/>
        <a>0.0</a>
        <div className='areaButton'>
          <a className='button'>VAI</a>
          <a className='button'>LIMPAR</a>
        </div>
    
      </div>
    );
  }
}
export default App;