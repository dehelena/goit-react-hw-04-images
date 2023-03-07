import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const pixabayKey = '33097272-5cfe3e3a455a7cd5afa001a4b';

export const requestImages = async (query, page) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${pixabayKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  // console.log(response.data);
  return response.data;
};
