import * as request from '../library/request';

const baseURL = 'http://localhost:3030/data/purchases';


export const purchase = (itemId, userId) => request.post(`${baseURL}`, { itemId, userId });

export const getALLPurchases = () => request.get(`${baseURL}`);

export const getBuyersOfItem = async (itemId) => {
    const query = encodeURIComponent(`itemId="${itemId}"`);

    const result = await request.get(`${baseURL}?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));

    return result;
};


export const getBoughtItems = async (userId) => {
    const query = new URLSearchParams({
        where: `userId="${userId}"`,
        load: `itemId=itemId:gamebazaar`,
    });
  
    const result = await request.get(`${baseURL}?${query}`);
 
    return result;
};