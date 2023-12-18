import * as request from "../library/request"

const baseUrl = "http://localhost:3030/data/gamebazaar";

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (id) => {
    const result = await request.get(`${baseUrl}/${id}`, );

    return result;
}

export const createItem = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
};

export const editItem = async (id, data) => {
    const result = await request.put(`${baseUrl}/${id}`, data);

    return result;
};

export const removeItem = async (id) => request.remove(`${baseUrl}/${id}`);
