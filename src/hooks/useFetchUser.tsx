import { useEffect, useState } from 'react';

export const useFetchUser = (id?: number) => {
  const [user, setUser] = useState<{ name: string, email: string } | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      // setLoading(true);
      // new Promise(resolve => setTimeout(resolve, 2000));
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
          // setLoading(false);
          setUser(data);
        })
  }, [id]);

  return { user/* , loading */ };
};