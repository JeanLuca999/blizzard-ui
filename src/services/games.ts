export const getGamesList = async () => {
  try {
    const response = await fetch(
      "https://api.brchallenges.com/api/blizzard/games"
    );
    const json = response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};
