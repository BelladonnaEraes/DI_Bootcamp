import {connect} from 'react-redux'
import {getResult} from '../redux/actions.js'

const But =(props)=>{
  const handleClick =()=> {
    const {fname, sname} =this.props
        const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a8f2b62e17msh90d15266ff2a529p1bcec6jsn22365b29d2fc',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
  }
};

fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${props.fname}&fname=${props.sname}`, options)
  .then(response => response.json())
  .then(response => {console.log(response)
     props.getRes(response)})
  .catch(err => console.error(err));}

  return(
    <>
     <button handleClick={props.handleClick}>Compair</button>
    </>
  )
}
const mapStateToProps =(state) => {
  return {
    fname: state.fname,
    sname: state.sname
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getRes: (obj) => dispatch(getResult(obj))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(But)
