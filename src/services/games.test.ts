import { GamesService } from "services";

describe("test service getGamesList", () => {
  it("should fetch data", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              name: "Diablo",
              category: "Ação",
              image: "diablo-image-src",
              logo: "diablo-logo-src",
            },
          ]),
      });
    });

    const result: GamesService.ISuccessResponse[] =
      await GamesService.getGamesList();

    expect(result[0].name).toBe("Diablo");
  });

  it("should get error message", async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());

    const result: GamesService.IErrorResponse =
      await GamesService.getGamesList();

    expect(result.msg).toBe("couldn't fetch data");
  });
});
