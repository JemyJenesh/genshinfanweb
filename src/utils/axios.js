import Axios from "axios";

const axios = Axios.create({
	baseURL: "https://genshin-app-api.herokuapp.com/api/",
});

export default axios;
