/* global fetch */
/**
 * Fetches a page
 * @param {int} pageId
 */
module.exports = (pageId) => {
    return fetch(
        `/wp-json/wp/v2/pages/${pageId}`,
        { method: 'GET' },
    ).then(response => response.json());
};
