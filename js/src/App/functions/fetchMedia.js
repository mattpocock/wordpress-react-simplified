/* global fetch */
/**
 * Fetches a page
 * @param {int} mediaId
 */
module.exports = (mediaId) => {
    return fetch(
        `/wp-json/wp/v2/media/${mediaId}`,
        { method: 'GET' },
    ).then(response => response.json());
};
