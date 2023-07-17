
import './App.css';
import { useEffect, useState } from 'react';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';

function App() {
  const [users, setUsers] = useState(null);
  const [profilepage, setProfilepage] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('https://panorbit.in/api/users.json').then(res => res.json())
      .then(data => {
        console.log(data.users)
        setUsers(data.users)
      })
  }, [])

  return (
    <>
      {
        profilepage ? <ProfilePage user={currentUser} users={users} setProfilepage={setProfilepage} /> : <HomePage users={users} setProfilepage={setProfilepage} setCurrentUser={setCurrentUser} />
      }
    </>
  );
}

export default App;
