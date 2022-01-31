import axios from 'axios';

const updateProfile = async (data) => {
  const response = await axios.put('/api/profile', data);

  return response.data;
};

export default updateProfile;
