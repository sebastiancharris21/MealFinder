import axios from "axios";
import { useEffect, useState } from "react";

export default function useHttpData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController(); //la instacia del controller va dentro del useEffect
    const { signal } = controller;
    setLoading(true);

    axios
      .get<{ meals: T[] }>(url, { signal })
      .then(({ data }) => {
        if (!ignore) {
          setData(data.meals);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [url]);

  return { loading, data, setData, setLoading};
}
