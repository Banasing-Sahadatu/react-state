import { render } from '@testing-library/react';
import React, {Component} from 'react'
import ProfileCard from './component/ProfileCard'

class App extends Component {
  constructor() {
  supper();

this.handleClick=this.handleClick.bind(this)

  this.state = {
    writer: {
      loading: false,
      list:[]
    }
  }

  this.handleClick(){
    this.setState({
      writers: {
        loading: true,
      }
    });
    setTimeout(async () => {
      let resp = await ("/writers.json");
      let result = await resp.json()
    })

    this.setState({
      writers: {
        loading: false,
        list:result
      }
    })

  
    }

  }



render() {
  const {
    writers: { loading, list }
  } = this.state;
}
if(loading) {
  return (

    <div>
      <h1>writers profile</h1>
      <div className='container'>
        <div className='card action'>
          <p className='infotext'> loading...</p>
        </div>
      </div>
    </div>
  )
}
}

export default App
