import { useState, useEffect } from "react";
import { getGamesList } from "services";

export interface Card {
  name: string;
  category: string;
  image: string;
  logo: string;
}

export function useGamesList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Card[]>([]);

  useEffect(() => {
    (async () => {
      const gamesList = await getGamesList();
      setData(gamesList);
      setLoading(false);
    })();
  }, []);

  return { data, loading };
}
