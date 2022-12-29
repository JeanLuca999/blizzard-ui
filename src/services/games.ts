export interface ISuccessResponse {
  name: string;
  category: string;
  image: string;
  logo: string;
}

export interface IErrorResponse {
  msg: string;
}

export const getGamesList = async () => {
  try {
    const response = await fetch(
      "https://api.brchallenges.com/api/blizzard/games"
    );
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
    return { msg: "couldn't fetch data" };
  }
};
