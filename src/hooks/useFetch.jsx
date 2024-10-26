// src/useFetch.js
import { useEffect, useState } from "react";

// Sử dụng API token và host từ biến môi trường Vite
const API_HOST = import.meta.env.VITE_API_HOST;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// Header mặc định cho các request API
const DEFAULT_HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${API_TOKEN}`,
};

export default function useFetch(
  { url = "", method = "GET", headers = {} },
  { enabled } = { enabled: true },
) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Thêm state để xử lý lỗi

  useEffect(() => {
    if (enabled) {
      setIsLoading(true);
      setError(null); // Reset lỗi trước mỗi lần gọi mới

      fetch(`${API_HOST}${url}`, {
        method,
        headers: {
          ...DEFAULT_HEADERS,
          ...headers,
        },
      })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
          }
          const data = await res.json();
          setData(data);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setError(err); // Ghi lỗi vào state
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, JSON.stringify(headers), enabled]);

  return { isLoading, data, error };
}
