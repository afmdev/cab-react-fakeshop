import { useState, useEffect } from "react";

const useFetchSingle = (url, numItems) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  var fetchUrl = url+'/'+numItems

  console.log(fetchUrl)

  const getData = async (fetchUrl) => {
    try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
        throw new Error(
        `This is an HTTP error: The status is ${response.status}`);
    }
    let actualData = await response.json();
    setData(actualData)
    setError(null);
    } catch (err) {
        setError(err.message);
    setData(null);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    getData(fetchUrl)
  }, []);

  return { data, loading, error, setData }
};

export default useFetchSingle;