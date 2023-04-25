import axios from "axios";

const CONFIG_URL = `/api/configuration/${
  import.meta.env.VITE_APP_ID ? import.meta.env.VITE_APP_ID : 1
}`;

const getConfig = async () => {
  const response = await axios.get(CONFIG_URL);
  const data = response.data;
  return data;
};

const configService = { getConfig };

export default configService;
