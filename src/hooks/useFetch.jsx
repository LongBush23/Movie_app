import { useEffect, useState } from "react";

const DEFAULT_HEADERS = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2IzMTkxMTVhOGNhOGIzNjg5MmIyNWRiMzQzNDM4YiIsIm5iZiI6MTcyNzk1MDY5My42MTQyMzYsInN1YiI6IjY2ZmU2ZTliNmZjNzRlNTc1NmY3Y2FmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r-PgbmIktTMiNqkGqSXwmxWgUxxWl4hxkkxhD8newiA",
};

export default function useFetch({ url = "", method = "GET", headers = {} }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
      method,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, JSON.stringify(headers)]);

  return { isLoading, data };
}
