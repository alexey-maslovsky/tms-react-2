import { useState } from 'react';
import uniqId from 'uniqid';

const ProfileForm = ({ user, onSave }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoSrc, setPhotoSrc] = useState(user.photoSrc);
  const [hobbies, setHobbies] = useState(user.hobbies);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleOnHobbyAdd = () => {
    setHobbies([
      ...hobbies,
      { id: uniqId(), name: '' },
    ]);
  };

  const handleOnHobbyDelete = (hobbyToDelete) => {
    return () => {
      const filteredHobbies = hobbies.filter((hobby) => hobby.id !== hobbyToDelete.id);

      setHobbies(filteredHobbies);
    };
  };

  const handleProfileSave = async () => {
    setIsLoading(true);

    await onSave({
      firstName,
      lastName,
      photoSrc,
      hobbies,
    });

    setIsLoading(false);
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
            <button onClick={handleOnHobbyDelete(hobby)}>X</button>
          </div>
        ))}
        <button onClick={handleOnHobbyAdd}>Add</button>
      </div>
      <button onClick={handleProfileSave} disabled={isLoading}>
        {isLoading ? 'Loading' : 'Save'}
      </button>
    </div>
  );
};

export default ProfileForm;
