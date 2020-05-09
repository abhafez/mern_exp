import React from 'react';

export const get = 'GET';
export const post = 'POST';
export const put = 'PUT';
export const deleting = 'DELETE';

const DOMAIN = process.env.REACT_APP_BASE_URL;
/**
 * @name useRequest
 * @type custom hook
 * @param {string} method
 * @param {string} url
 * @param {object} payload
 * @returns {object} {response , isLoading, error, setRequest}
 */
const useRequest = (method, url, payload) => {
  /**
   * @typedef {JSON} response — API response
   */
  /**
   * @typedef {Function} setResponse — sets response onload
   */
  /**
   * @type {[response, setResponse]} response
   */
  const [response, setResponse] = React.useState(null);
  /**
   * @typedef {Error} error — Response Error if found
   */
  /**
   * @typedef {Function} setError — sets response error on catch.
   */
  /**
   * @type {[setError, setError]} response error.
   */
  const [error, setError] = React.useState(null);
  /**
   * @typedef {Boolean} isLoading — Request pending state.
   */
  /**
   * @typedef {Function} setIsLoading — Sets loading state between sending request and getting results.
   */
  /**
   * @type {[isLoading, setIsLoading]} Loading state
   */
  const [isLoading, setIsLoading] = React.useState(false);
  /**
   * @typedef {String} request — Recall const that is observed by the useEffect function to request API.
   */
  /**
   * @typedef {Function} setRequest — Sets request when needed.
   * @exports
   */
  /**
   * @type {[request, setRequest]} response errpr
   */
  const [request, setRequest] = React.useState(null);

  React.useEffect(() => {
    if (request) {
      setRequest(null);
      fetchData();
    }
  }, [request]);

  /**
   * @function fetchData
   * @async
   * @description makes XMLHttpRequest API request depending on method and url from useRequest custom hook.
   */
  async function fetchData() {
    setIsLoading(true);
    try {
      const xhr = new XMLHttpRequest();
      xhr.open(method, `${DOMAIN}${url}`);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.onload = () => {
        const res = JSON.parse(xhr.responseText);
        setResponse(res);
        setIsLoading(false);
        if (xhr.status === 400) {
          setIsLoading(false);
        }
      };
      xhr.send(JSON.stringify(payload));
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }

  return { response, error, isLoading, setRequest };
};

export default useRequest;
