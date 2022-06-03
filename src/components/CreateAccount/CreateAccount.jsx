import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";

function CreateAccountForm() {
  // State
  const [register, setRegister] = useState({
    "username": "",
	  "password": "",
	  "password2": "",
	  "email": "",
	  "first_name": "",
	  "last_name": "",
    "avatar": "",
    "bio": "",
    "social_link": ""
  });

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setRegister((prevRegister) => ({
      ...prevRegister,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (register.username && register.password && register.password2 && register.email && register.first_name && register.last_name && register.avatar && register.bio && register.social_link) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}users/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: register.username, 
              password: register.password,
              password2: register.password2,
              email: register.email,
              first_name: register.first_name,
              last_name: register.last_name,
              avatar: register.avatar,
              bio: register.bio,
              social_link: register.social_link
            }),
          }
        );
        const data = await response.json();
        console.log(data)
        window.localStorage.setItem("token", data.token);
        if (data.token===undefined) {
          console.log("cannot register authentication token")
          return (
            <>
            <h2>Please Try Again</h2>
            </>
          );
        }
      else {
        // Navigate directly to User Profile
        navigate(`/profile/${data.data.id}`);
      }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const formFields = [
    {
       id: "username",
       label: "Username: ",
       placeholder: "Enter your Username",
       type: "text",
    },
    {
        id: "password",
        label: "Password: ",
        placeholder: "Enter Password",
        type: "password",
    },
    {
        id: "password2",
        label: "Confirm Password: ",
        placeholder: "Re-enter Password",
        type: "password",
    },
    {
        id: "email",
        label: "Email: ",
        placeholder: "Enter Email Address",
        type: "email",
    },
        {
       id: "first_name",
       label: "First Name: ",
       placeholder: "Enter First Name",
       type: "text",
    },
    {
        id: "last_name",
        label: "Last Name: ",
        placeholder: "Enter Last Name",
        type: "text",
    },
    {
      id: "avatar",
      label: "Avatar: ",
      placeholder: "Copy Image URL",
      type: "url",
  },
    {
      id: "bio",
      label: "Bio: ",
      placeholder: "Tell us about yourself",
      type: "text",
  },
    {
      id: "social_link",
      label: "Social Link: ",
      placeholder: "Enter Social Media Link",
      type: "url",
  },
]

    return ( 
        <form>
            {formFields.map((field, key) => {
                return (
                <div key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                </div>
                )
            })}
            <div className="create-btn">
              <button className="create-acccount-btn" type="submit" onClick={handleSubmit}>
                  Create Account
              </button>
            </div>
        </form>
    )
}

export default CreateAccountForm;