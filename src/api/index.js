import axios from 'axios';

const baseUrl = 'https://russianwarship.rip/api/v2';

export const warInfo = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/war-info`,
  };

  const response = await axios(configObj);
  console.log(response.data);
};

export const statistics = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/statistics`,
  };

  const response = await axios(configObj);
  console.log(response.data);
};

export const statisticsDate = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/statistics/{date}`,
  };

  const response = await axios(configObj);
  console.log(response.data);
};
