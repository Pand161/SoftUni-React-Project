import * as request from '../library/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (id) => {
    const query = new URLSearchParams({
        where: `id="${id}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (id, text, username) => {
    const newComment = await request.post(baseUrl, {
        username,
        id,
        text,
    });

    return newComment;
};
