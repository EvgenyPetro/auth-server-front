import { useState, useEffect } from "react";
import { getAuthUser } from "../../Server/AuthUserServer";

export const useAuth = () => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        console.log(data.name);
          setUser(data.name);
        setTimeout(() => setLoading(false), 500);
      })
      .catch(function (err) {
        console.log(err);
        setTimeout(() => setLoading(false), 500);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { user, loading };
};
