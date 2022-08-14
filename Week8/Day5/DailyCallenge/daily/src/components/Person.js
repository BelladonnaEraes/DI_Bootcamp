const Person = (props) => {
  const {id, name, occupation, image} = props.data;
  return (
      <div id={id}>
        <img src={image} />
        <h2 className="f3 mb2">{name}</h2>
        <p className="f5 fw4 gray mt0">{occupation}</p>
      </div>
  )
}
export default Person
