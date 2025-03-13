import axios from 'axios';

export const getChartContent = async (page) => {
  return await axios
    .get('/api/chartContent', { params: { page } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getEventContent = async (page) => {
  return await axios
    .get('/api/eventContent', { params: { page } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getStoreContent = async (page) => {
  return await axios
    .get('/api/storeContent', { params: { page } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getChargeContent = async (page) => {
  return await axios
    .get('/api/chargeContent', { params: { page } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getWhosFanContent = async (page) => {
  return await axios
    .get('/api/whosfanContent', { params: { page } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getAwardsContent = async (page) => {
  return await axios
    .get('/api/awardsContent', { params: { page } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getNewsContent = async (page) => {
  return await axios
    .get('/api/newsContent', { params: { page } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const getWhookContent = async (page) => {
  return await axios
    .get('/api/whookContent', { params: { page } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};
