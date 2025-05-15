import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData();
    // console.log(user);

    const handleUpdateUser =(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const UpdatedUser = {name, email};
        console.log(UpdatedUser)
        console.log(name, email);
                //update user info in the db
        fetch(`http://localhost:3000/users/${user._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(UpdatedUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log("after update", data);
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleUpdateUser} action="">
                <input type='text' name='name' defaultValue={user.name}></input>
                <br></br>
                <input type='email' name='email' defaultValue={user.email}></input>
                <br></br>
                <input type='submit' value='Update User'></input>
               
            </form>
        </div>
    );
};

export default UpdateUser;