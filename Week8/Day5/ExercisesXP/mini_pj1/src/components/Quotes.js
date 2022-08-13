const Quotes = (props) => {
  const {author, quote} = props.data

return (
  <div>
  <h1>{quote}</h1>
  <p>{author}</p>
  </div>
)
}
export default Quotes
