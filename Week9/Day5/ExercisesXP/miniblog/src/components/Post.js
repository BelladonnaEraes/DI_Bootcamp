import React from 'react'
import {connect} from 'react-redux'

class Post extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }
    render(){
      return(
        <>
           {
             this.props.posts.find(element=>element.id)
           }
        </>
      )
    }
  }

const mapStateToProps = (state, ownProps) => {
  return {
    posts:state.posts
  }
}

export default connect(mapStateToProps) (Post)
