import { useState } from 'react';

const ProfileForm = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoSrc, setPhotoSrc] = useState(user.photoSrc);
  const [hobbies, setHobbies] = useState(user.hobbies);

  const handleOnFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleOnLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleOnPhotoSrcChange = (event) => {
    setPhotoSrc(event.target.value);
  };

  const handleOnHobbyChange = (editableHobby) => (event) => {
    const newHobbies = hobbies.map((hobby) => ({ ...hobby }));

    const hobbyToUpdate = newHobbies.find((hobby) => hobby.id === editableHobby.id);

    hobbyToUpdate.name = event.target.value;

    setHobbies(newHobbies);
  };

  return (
    <div>
      <label>
        Photo URL:
        <input value={photoSrc} onChange={handleOnPhotoSrcChange} />
      </label>
      <label>
        First Name:
        <input value={firstName} onChange={handleOnFirstNameChange} />
      </label>
      <label>
        Last Name:
        <input value={lastName} onChange={handleOnLastNameChange} />
      </label>
      <div>
        <strong>Hobbies</strong>
        {hobbies.map((hobby) => (
          <div key={hobby.id}>
            <input value={hobby.name} onChange={handleOnHobbyChange(hobby)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileForm;
