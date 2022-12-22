import { useState, useEffect } from "react";
import { getGamesList } from "services";
import { ICard } from "components/Card";

export function useGamesList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ICard[]>([]);

  useEffect(() => {
    (async () => {
      const gamesList = await getGamesList();
      setData(gamesList);
      setLoading(false);
    })();
  }, []);

  return { data, loading };
}
