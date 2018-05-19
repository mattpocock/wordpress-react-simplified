/* global fetch */
/**
 * Fetches a page
 * @param {int} pageId
 */
module.exports = pageId => fetch(
    `/wp-json/wp/v2/page/${pageId}`,
    { method: 'GET' },
).then(response => response.json());
