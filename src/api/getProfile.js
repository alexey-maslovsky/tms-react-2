import axios from 'axios';

const getProfile = async () => {
  const profile = await axios.get('/api/profile');

  return profile.data;
};

export default getProfile;
