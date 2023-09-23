import PropTypes from 'prop-types'
import '../Post/post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {

    const { id, title } = post;
    const navigate = useNavigate();


    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }



    return (
        <div className='post'>
            <h4>post of id :{id}</h4>
            <p>{title}</p>
            <Link to={`/post/ ${id}`}>Post details:</Link>

            <Link to={`/post/${id}`}><button>Show details</button></Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}


export default Post;