import API from "./Api";

const URL = '/req'

export const createRequest = async (data) => {
  try {
    const res = await API.post(URL, data);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getRequestList = async () => {
  try {
    const res = await API.get(URL);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getRequestDetail = async (reqBoardCode) => {
  try {
    const res = await API.get(URL + `/${reqBoardCode}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};