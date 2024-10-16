
import React from 'react';
import UserProfile from './UserProfile';
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <div>
      <UserProvider>
        <h1>My App</h1>
        <UserProfile />
      </UserProvider>
    </div>
  );
};

export default App;
