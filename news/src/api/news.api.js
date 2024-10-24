import {BASE_URL} from './constants'
const newsUrl = `${BASE_URL}/news`

export const getNews = async () => {
    const request = await fetch(newsUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
    const news = await request.json();
    if (!request.ok) {
        throw new Error('Error getting news', news.message);
    };
    return news;
};

