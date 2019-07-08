/**
 * Get href for page.
 *
 * @returns {string} - Page href.
 */
export const getDocumentHref = () => (process.isClient)? document.location.href: "";

/**
 * Get title for page.
 *
 * @returns {string} - Page title.
 */
export const getDocumentTitle = () => (process.isClient)? document.title: "";
