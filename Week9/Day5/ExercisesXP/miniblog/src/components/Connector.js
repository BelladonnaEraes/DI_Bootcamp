import {useParams} from 'react-router-dom';
import Post from './Post';

const Connector = (props) => {
  const params = useParams()
  return(
    <Post post_id={params.id} />
  )
}
export default Connector
