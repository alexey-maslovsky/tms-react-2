import React, { useEffect, useState } from 'react';
import ButtonLink from './components/ButtonLink/ButtonLink';
import Profile from './components/Profile/Profile';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { Hearts } from  'react-loader-spinner';
import getProfile from './api/getProfile';
import updateProfile from './api/updateProfile';

const UserProfileContainerStyles = {
  display: 'flex',
};

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState(null);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = async (newProfileData) => {
    const updatedData = await updateProfile(newProfileData);

    setData(updatedData);

    setIsEdit(false);
  };

  const fetchProfileData = async () => {
    const newData = await getProfile();

    setData(newData);
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div>
      <div style={UserProfileContainerStyles}>
        User Profile{' '}
        {!isEdit && data && (
          <ButtonLink onClick={handleEdit}>
            Edit
          </ButtonLink>
        )}
      </div>

      {!data && <Hearts />}
      {!isEdit && data && <Profile user={data} />}
      {isEdit && data && <ProfileForm user={data} onSave={handleSave} />}
    </div>
  );
};

export default App;
