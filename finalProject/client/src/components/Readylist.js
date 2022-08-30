import {connect} from 'react-redux'


const Readylist =(props)=>{
  console.log(props.langAll[1].languageVal)
  return (
    <>
    <p>Hello!</p>
    <div>{props.langAll[1].languageVal}</div>
    </>
  )
}
const mapStateToProps=(state)=>{
  return {
    formvalues:state.formvalues,
    formvalues1:state.formvalues1,
    formvalues2:state.formvalues2,
    langAll:state.langAll
  }
}

export default connect(mapStateToProps)(Readylist)
