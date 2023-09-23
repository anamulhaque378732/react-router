import { useLoaderData } from "react-router-dom";
import Use from "../Use/Use";
import '../User/user.css'

const User = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div >
            <h2>Our users: {users.length}</h2>
            <p>Lorem ipsum  </p>
            <div className="user">
                {
                    users.map(user => <Use key={user.id} user={user}></Use>)
                }

            </div>
        </div>
    );
};

export default User;