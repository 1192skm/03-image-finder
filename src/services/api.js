import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35783392-ced7b2b0963a7e7ac45fdf9cc';

export const getImages = async (listName, page, signal) => {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${listName}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`, signal
    );
    return response.data
}
