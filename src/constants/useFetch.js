import { useEffect, useState } from "react";

const cache = {};

function useFetch(key, url) {
  const [data, setData] = useState(null);
  const [setLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState(null);

  useEffect(() => {
    if (cache[key]) {
      setData(cache[key]);
      return;
    }
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const responseData = await response.json();

        setData(responseData);
        setIsLoading(false);

        //cache[key] = responseData;
      } catch (error) {}
      setisError(true);
      setIsLoading(false);
    }
    getData();
  }, [key, url]);

  return { data, setLoading, isError };
}

export default useFetch;
