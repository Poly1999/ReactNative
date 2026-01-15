import axios from 'axios';

const baseUrl = 'https://russianwarship.rip/api/v2';

export const warInfo = async () => {
  try {
    const response = await axios.get(`${baseUrl}/war-info`);
    return response.data;
  } catch (error) {
    console.error('Error fetching war info:', error);
    throw error;
  }
};

export const statistics = async () => {
  try {
    const response = await axios.get(`${baseUrl}/statistics/latest`);
    return response.data;
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw error;
  }
};

export const statisticsDate = async date => {
  try {
    const response = await axios.get(`${baseUrl}/statistics/${date}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching statistics by date:', error);
    throw error;
  }
};
