import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const handleLogin = () => {
        const newUser = {
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
        setUser(newUser); 
    };

    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome, {user.name}</h1>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>No user logged in.</p>
            )}
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
};

export default UserProfile;
