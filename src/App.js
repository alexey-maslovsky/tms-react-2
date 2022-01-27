import React, { useState } from 'react';
import ButtonLink from './components/ButtonLink/ButtonLink';
import Profile from './components/Profile/Profile';
import ProfileForm from './components/ProfileForm/ProfileForm';

const TEST_DATA = {
  firstName: 'Alex',
  lastName: 'Maslovsky',
  photoSrc: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
  hobbies: [
    { id: '1', name: 'guitar' },
    { id: '2', name: 'nature' },
    { id: '3', name: 'gaming' },
  ],
};

const UserProfileContainerStyles = {
  display: 'flex',
};

const App = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    setIsEdit(false);
  };

  return (
    <div>
      <div style={UserProfileContainerStyles}>
        User Profile{' '}
        <ButtonLink onClick={isEdit ? handleSave : handleEdit}>
          {isEdit ? 'Save' : 'Edit'}
        </ButtonLink>
      </div>

      {!isEdit && <Profile user={TEST_DATA} />}
      {isEdit && <ProfileForm user={TEST_DATA} />}
    </div>
  );
};

export default App;
