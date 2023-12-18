import * as request from "../library/request"

const baseUrl = "http://localhost:3030/data/gamebazaar";


export const getAll = async () => {
    const response = await request.get(baseUrl);

    return Object.values(response);
}

export const createItem = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
};
