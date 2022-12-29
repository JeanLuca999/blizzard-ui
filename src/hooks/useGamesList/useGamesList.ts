import { useState, useEffect } from "react";
import { GamesService } from "services";
import { ICard } from "components/Card";

export function useGamesList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<ICard[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const gamesList: GamesService.ISuccessResponse[] =
          await GamesService.getGamesList();
        setData(gamesList);
        setLoading(false);
      } catch (e) {
        setError(JSON.stringify(e));
      }
    })();
  }, []);

  return { data, loading, error };
}
