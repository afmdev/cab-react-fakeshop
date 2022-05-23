import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  

    const getData = async (url) => {
         console.log("getData")
try {
const response = await fetch(url);
if (!response.ok) {
    throw new Error(
    `This is an HTTP error: The status is ${response.status}`
    );
}
let actualData = await response.json();
const myData = actualData
setData(actualData)

setError(null);
} catch (err) {
    setError(err.message);
setData(null);
} finally {
    setLoading(false);
}
    }


console.log("component")
  useEffect(() => {
getData(url)
  }, []);

  return { data, loading, error }
};

export default useFetch;