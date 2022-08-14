import React from 'react'

class Cards extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name:''
    }
    this.last_name = 'Yosi'
    console.log(1)
  }

  render(){

    console.log(2)
    return (

      <div>
      <h1>Hello {this.state.name}</h1>
      </div>
    )

  }
//  componentDidMount(){
//    this.setState({name:this.last_name})
//  }
//  componentDidUpdate(prevProps, prevState){
//    console.log(prevState)
//  }

}

export default Cards
