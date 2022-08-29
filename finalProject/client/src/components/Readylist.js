import {connect} from 'react-redux'



const Readylist =(props)=>{
  console.log(props.formvalues.fname, props.formvalues1.summary)
  return (
    <>
    <p>Hello!</p>
    <div>{props.formvalues.fname}</div>
    <div>{props.formvalues1.summary}</div>
    <div>{props.formvalues2.education_profession}</div>
    </>
  )
}
const mapStateToProps=(state)=>{
  return {
    formvalues:state.formvalues,
    formvalues1:state.formvalues1,
    formvalues2:state.formvalues2
  }
}

export default connect(mapStateToProps)(Readylist)
