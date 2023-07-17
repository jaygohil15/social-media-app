
import './HomePage.css';

const HomePage = ({ users, setProfilepage, setCurrentUser }) => {

   const handleOnClick = (event, user) => {
      console.log(event, user)
      setProfilepage(true)
      setCurrentUser({ ...user })
   }

   return (
      <div className="container">
         <div className="container-heading">
            Select an account
         </div>
         <div className="container-list">
            {
               users ? users.map((user, key) => {
                  return (
                     <div className="container-list-item" key={key} onClick={(event => {
                        handleOnClick(event, user);
                     })}>
                        <img src={user.profilepicture} alt='Not found' />
                        <p>{user.username}</p>
                     </div>
                  )
               }) : 'Loading...'
            }
         </div>
      </div >
   )
}

export default HomePage;