import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_API } from "../../../../common/constants";

/**
 * Custom React hook to fetch and manage the state of a specific product's data from the API.
 *
 * This hook fetches data for a product identified by its `id` from the URL parameters
 * using the `useParams` hook from React Router. It manages loading, error, and data states.
 *
 * @returns {Object} An object containing the following:
 * - `data` (Object|null): The fetched product data, or `null` if not yet loaded.
 * - `isLoading` (boolean): `true` if the data is currently being fetched, `false` otherwise.
 * - `isError` (boolean): `true` if an error occurred during data fetching, `false` otherwise.
 */

function useProduct() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const fetchedData = await fetch(`${BASE_API}/${id}`);
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
  }, [id]);

  return { data, isLoading, isError };
}

export { useProduct };
