import React from "react";

function User({ name, age, email, phoneno }) {
    return(
     <div>User
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h2>{email}</h2>
            <h2>{phoneno}</h2>
        </div>
    )
};

export default User;