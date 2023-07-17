import { useState } from "react";
import './ProfilePage.css';

const ProfilePage = ({ user, users, setProfilepage }) => {

   const [profileTab, setProfileTab] = useState('Profile');
   const [chatActive, setChatActive] = useState(false);

   const handleChatPopup = () => {
      setChatActive(prevState => !prevState)
   }

   const profileDetail = () => {
      return (
         <>
            <div className="profilecontainer-profile">
               <div className="profilecontainer-profile-left">
                  <img src={user.profilepicture} alt='Not Available' />
                  <div><span>{user.name}</span></div>
                  <div>Username : <span>{user.username}</span></div>
                  <div>Email : <span>{user.email}</span></div>
                  <div>Phone : <span>{user.phone}</span></div>
                  <div>Website : <span>{user.website}</span></div>
                  <div className="border-top">Company</div>
                  <div>Name : <span>{user.company.name}</span></div>
                  <div>Catchphrase : <span>{user.company.catchPhrase}</span ></div >
                  <div>bs : <span>{user.company.bs}</span ></div >

               </div >
               <div className="profilecontainer-profile-right">
                  <div>Address :</div>
                  <div>Street : <span>{user.address.street}</span></div>
                  <div>Suite : <span>{user.address.suite}</span></div>
                  <div>City : <span>{user.address.city}</span></div>
                  <div>Zipcode : <span>{user.address.zipcode}</span></div>
                  <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt='Not Available' />
               </div>
            </div >
            <div className="chatpopup" onClick={handleChatPopup}>
               <div className="chatpopup-heading">Chats</div>
               {
                  chatActive ? (

                     users.map((user, key) => {
                        return (
                           <div className="chatpopup-item" key={key}>
                              <img src={user.profilepicture} alt="Not Available" />
                              <div>{user.name}</div>
                              <div className="chatpopup-circle"></div>
                           </div>
                        )
                     })

                  ) : <></>
               }
            </div>
         </>
      )
   }

   const handleSidepanelClick = (event) => {
      const sidepanel = document.getElementsByClassName('sidepanel')[0];
      for (let i of sidepanel.childNodes) {
         i.classList.remove('activetab')
      }
      event.target.classList.add('activetab');
      setProfileTab(event.target.innerText)
   }

   const handlePopout = () => {
      const popout = document.getElementsByClassName('popout')[0];
      if (popout.style.display === 'block') {
         popout.style.display = 'none';
      } else {
         popout.style.display = 'block';
      }
   }

   const handleSignout = () => {
      setChatActive(false)
      setProfilepage(false)
   }

   return (
      <div className="mainprofilecontainer">
         <div className="sidepanel">
            <div className="sidepanel-item activetab" onClick={handleSidepanelClick}>
               Profile
            </div>
            <div className="sidepanel-item" onClick={handleSidepanelClick}>
               Posts
            </div>
            <div className="sidepanel-item" onClick={handleSidepanelClick}>
               Gallery
            </div>
            <div className="sidepanel-item" onClick={handleSidepanelClick}>
               ToDo
            </div>
         </div>
         <div className="profilecontainer">
            <div className="profilecontainer-heading">
               <div className="profilecontainer-heading-item">
                  <span>{profileTab}</span>
               </div>
               <div className="profilecontainer-heading-item" onClick={handlePopout}>
                  <img src={user.profilepicture} alt="Not Available" className="smallpic" />
                  <div>{user.name}</div>
                  <div className="popout">
                     <img className="mainprofilepic" src={user.profilepicture} alt="Not Available" />
                     <div>{user.name}</div>
                     <div><span>{user.email}</span></div>
                     <div className="otheruser">
                        <img src={users[3].profilepicture} alt="Not Available" className="smallpic" />
                        <div>{users[3].name}</div>
                     </div>
                     <div className="otheruser">
                        <img src={users[4].profilepicture} alt="Not Available" className="smallpic" />
                        <div>{users[4].name}</div>
                     </div>
                     <div className="signoutbtn" onClick={handleSignout}>Sign Out</div>
                  </div>
               </div>
            </div>
            {
               profileTab === 'Profile' ? profileDetail() : <p>Coming Soon</p>
            }
         </div>
      </div >
   )
}

export default ProfilePage;