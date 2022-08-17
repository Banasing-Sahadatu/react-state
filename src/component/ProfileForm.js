import React, {useState} from 'react'

function ProfileForm() {
    const [profiles, setProfiles] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
    });
    
    const handler = (event) => {
        setProfiles((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
        
    }


const handleForm = (e) => {
    e.preventDefault();
    Submit(profile)
}



  return (
      <div className="formcontainer">
          <h3>Profile Form</h3>
          <form>
              <fieldset>
                  <legend>Bio data</legend>
                  <div className="names">
                      <label>first Name
                          <input name="firstname" value={profile.firstname} type="text" onchange={handler} />

        
                      </label>
                      <label>"lastname"
                          <input name="lastname" value={profile.lastname} type="text" onchange={handler} />
                          
        
                      </label>
                  </div>  
                  
                  <div className="names">
                      <label>email
                          <input name="email" value={profile.email} type="email" onchange={handler} />

        
                      </label>
                      <label> phone
                          <input name="phone" value={profile.phone} type="tel" onchange={handler} />
                          
        
                      </label>
                  </div>                  
              </fieldset>
          </form>
          
      </div>
  )
}

export default ProfileForm