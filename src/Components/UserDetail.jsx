import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        <div>
            user details
        </div>
    );
};

export default UserDetail;