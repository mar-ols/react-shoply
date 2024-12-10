import { useState, useEffect } from "react";

/**
 * Custom React hook to fetch and manage the state of a list of products from the provided API endpoint.
 *
 * This hook fetches data from the specified url and manages loading, error, and data states.
 *
 * @param {string} url - The API endpoint to fetch the products from.
 * @returns {Object} An object containing the following:
 * - `data` (Array): The array of fetched product data, empty if no data has been loaded yet.
 * - `isLoading` (boolean): `true` if the data is currently being fetched, `false` otherwise.
 * - `isError` (boolean): `true` if an error occurred during data fetching, `false` otherwise.
 */
function useProducts(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();

        setData(json.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}

export { useProducts };
