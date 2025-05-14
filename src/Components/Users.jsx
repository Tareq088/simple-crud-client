import React, { use, useState } from 'react';


const Users = ({usersPromise}) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers);
    console.log(initialUsers);

    const handleUser =(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = {name, email};
        console.log(newUser);
                //create user in the database
        fetch('http://localhost:3000/users',{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(newUser),
        })
        .then(res=> res.json())
        .then(data => {
            console.log("dta after creating user in the db",data);
                    
            if(data.insertedId){
                        // newUser e kono id nai. backend (mongodb) theke id ta asteche. tai _id tao dhukabo
                newUser._id= data.insertedId;
                setUsers([...users,newUser]);
                alert("user is successfully added");
            }
        })
    }

    return (
        <div>
                    {/* add user */}
            <div>
                <form onSubmit={handleUser} action="">
                    <input type="text" name="name" id="" />
                    <br />
                    <input type="email" name="email" id="" />
                    <br />
                    <input type="submit" value="Add User" />
                </form>
            </div>
                        {/* show user */}
            <div>
                {
                    users.map(user =>
                        <p key={user._id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;