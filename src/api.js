import axios from "axios";

export const getQuotes = async () => {
  // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = "http://itsthisforthat.com/api.php?json";

  return await axios.get(`${proxyUrl + apiUrl}`);
};
