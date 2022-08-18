
import ProfileCard from './component/ProfileCard';
import ProfileForm from './component/ProfileForm';
import React, { useState } from 'react';

function App() {
  const [allProfiles,setAllprofiles] = useState([

    {
      firstname: "sahada",
      lastname: "Banasing",
      email: "sahada@gmail.com",
      phone: "0240992550"
    }
  ])

  const updateallprofiles = (profiles) => {
    let arr = allProfiles;
    arr.push(profiles)
    setAllprofiles([...arr])
  };


  return (
    <>
      <div className="app">
        <h1>Our profile maker</h1>

      </div>
      <ProfileForm submit={updateallprofiles} />
      <hr />
      <div className="list">
        {allProfiles.map((person, index) => (
          <ProfileCard key={index} card={person} />
        ))}
      </div>
      </>
  )
}        

export default App
