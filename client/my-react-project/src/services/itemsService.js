import * as request from "../library/request"

const baseUrl = "http://localhost:3030/jsonstore/gamebazaar";


export const getAll = async () => {
    const response = await request.get(baseUrl);

    return Object.values(response);
}

