import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const { postId } = useParams();


    const { title, body, id } = post;

    console.log(postId);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p>Body: {body}   </p>
            <button onClick={handleGoBack}>Go back</button>



        </div>
    );
};

export default PostDetails;