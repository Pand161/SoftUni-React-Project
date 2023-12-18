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

export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);

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

export const removeItem = async (data) => request.remove(`${baseUrl}/${data}`);
