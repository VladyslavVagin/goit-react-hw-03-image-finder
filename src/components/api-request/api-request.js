import axios from 'axios';

async function getPicturesApi(searchData) {
  const response = await axios({
    url: 'https://pixabay.com/api/',
    params: {
      key: '40026109-900194399c80021c84c1deb9d',
      q: `${searchData}`,
      image_type: 'photo',
      orientation: 'horizontal',
      page: 1,
      per_page: 12,
    },
  });
  return response;
}

export default getPicturesApi;
