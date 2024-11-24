import axios from 'axios';
import { PhotoInfo, Post } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const searchResult = async (
  text: string,
  page: number
): Promise<Post> => {
  const photosParams = {
    params: {
      client_id: 'VsTQYjMQlqYQ2CwMUE430Sduq3BobRMTtA-x2hmUjF8',
      query: text,
      page: page,
      per_page: 20,
      orientation: 'landscape',
    },
  };

  const response = await axios.get<{
    results: PhotoInfo[];
    total_pages: number;
  }>('/search/photos/', photosParams);
  return {
    results: response.data.results,

    totalPages: response.data.total_pages,
  };
};
