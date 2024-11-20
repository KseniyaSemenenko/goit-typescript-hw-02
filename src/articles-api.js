import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const searchResult = async (text, page) => {
    const photosParams = {
        params: {
            client_id: "VsTQYjMQlqYQ2CwMUE430Sduq3BobRMTtA-x2hmUjF8",
            query: text,
            page: page,
            per_page: 20,
            orientation: "landscape",
        }
    }
    const response = await axios.get('/search/photos/', photosParams);
    return {
        results: response.data.results,
        totalPages: response.data.total_pages,
     };
}