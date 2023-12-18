import * as request from '../library/request';

const baseURL = 'http://localhost:3030/data/purchases';


export const purchase = (itemId, id) => request.post(`${baseURL}`, { itemId, id });

export const getBuyersOfProduct = async (id) => {
    const query = encodeURIComponent(`id="${id}"`);

    const result = await request.get(`${baseURL}?select=id&where=${query}`)
        .then(res => res.map(x => x.id));

    return result;
};


export const getBoughtProducts = async (id) => {
    const query = new URLSearchParams({
        where: `id="${id}"`,
        load: `id=id:technique`,
    });
  
    const result = await request.get(`${baseURL}?${query}`);
 
    return result;
};