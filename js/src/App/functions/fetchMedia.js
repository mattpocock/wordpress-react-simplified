/* global fetch */
/**
 * Fetches a piece of media
 * @param {int} mediaId
 */
module.exports = mediaId => fetch(
    `/wp-json/wp/v2/media/${mediaId}`,
    { method: 'GET' },
).then(response => response.json());
