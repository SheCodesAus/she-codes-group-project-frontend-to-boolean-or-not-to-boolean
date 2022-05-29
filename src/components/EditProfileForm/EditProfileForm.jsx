import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";

function EditProfileForm({user}) {
  // State
    const [editProfileInfo, setEditProfileInfo] = useState(user);


    console.log("------>", editProfileInfo)

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEditProfileInfo((prevEditProfileInfo) => ({
            ...prevEditProfileInfo,
            [id]: value,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        if (!token)return;

        const updatedUser = {}
        if (user.username !== editProfileInfo.username) updatedUser.username = editProfileInfo.username
        if (user.email !== editProfileInfo.email) updatedUser.email = editProfileInfo.email
        if (user.avatar !== editProfileInfo.avatar) updatedUser.avatar = editProfileInfo.avatar
        if (user.bio !== editProfileInfo.bio) updatedUser.bio = editProfileInfo.bio
        if (user.social_link !== editProfileInfo.social_link) updatedUser.social_link = editProfileInfo.social_link

        if (Object.keys(updatedUser).length > 0) {
            try {
                const res = await 
                fetch(`${process.env.REACT_APP_API_URL}users/${user.id}/`, {
                    method:"put",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({...updatedUser}),
                });
                const data = await res.json()
                console.log(data);

                navigate(`/profile/${user.id}/`);               
            } catch(err) {
                console.log(err);
            }
        }
    }


    return (
        <div className="form">
        <form>
            <div className="form-item">
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    value={editProfileInfo.username}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    id="email"
                    value={editProfileInfo.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="avatar">Avatar: </label>
                <input
                    type="url"
                    id="avatar"
                    value={editProfileInfo.avatar}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="bio">Bio: </label>
                <input
                    type="text"
                    id="bio"
                    value={editProfileInfo.bio}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="social_link">Socials: </label>
                <input
                    type="url"
                    id="social_link"
                    value={editProfileInfo.social_link}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
            </div>
        <div className="edit-button-div">
            <button className="edit-profile-button" type="submit" onClick={handleSubmit}>
                Update Profile
            </button>
        </div>
        </form>
        </div> 
        )
    }


export default EditProfileForm;