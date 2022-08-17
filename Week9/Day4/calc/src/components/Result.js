

const Result =(props)=>{
  return(
    <>
    <h2>Results</h2>
    <p>{props.results.fname} and {props.results.sname}</p>
    <p>persentage {props.results.persentage}</p>
    <p>result {props.results.result}</p>

    </>
  )
}
export default Result
