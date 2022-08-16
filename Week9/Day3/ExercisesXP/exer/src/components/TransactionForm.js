import React from "react"

class TransactionForm extends React.Component {
  constructor(){
    super()
    this.state={
      accountNumber:'',
      FSC:'',
      name:'',
      amount:''
    }
  }
handleInputChange =(e)=> {
    this.setState({
      accountNumber:e.target.value,
      FSC:e.target.value,
      name:e.target.value,
      amount:e.target.value
    })
    const{
      accountNumber, FSC, name, amount
    } = this.state
    console.log()
  }

  render(){
    return(
      <>
      <form>
      accountNumber <input type='text' name="accountNumber" onChange={(e)=>this.handleInputChange(e)}/><br/>
      FSC <input type='text' name="FSC" onChange={(e)=>this.handleInputChange(e)}/><br/>
      name <input type='text' name="name" onChange={(e)=>this.handleInputChange(e)}/><br/>
      amount <input type='text' name="amount" onChange={(e)=>this.handleInputChange(e)}/><br/>
      <input type='submit' value="submit"/>
      </form>
      </>
    )
  }
}


export default TransactionForm
