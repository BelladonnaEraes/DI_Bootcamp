
import React from "react"
import {connect} from 'react-redux'

class Home extends React.Component {
  constructor(){
    super()
    this.state={

    }
  }
  render() {
        return(
               <>
               {
                 this.props.posts.map((item,i) => {
                   return (
                     <div className="posts" Key={item.id} id={item.id}>
                     <h6>{item.title}</h6>
                      <p>{item.body}</p>
                     </div>
                   )
                 })
               }

              </>
        )
    }
}
const mapStateToProps =state =>{
  return {
    posts:state.posts
  }
}

export default connect(mapStateToProps) (Home)
