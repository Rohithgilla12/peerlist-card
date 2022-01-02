import { json, LoaderFunction } from "remix";
import { BASE_URL, BUILD_REGEX } from "~/constants";

export const loader: LoaderFunction = async ({ params }) => {
  const { userId } = params;

  // get page data
  const peerlistPageData = await fetch("https://peerlist.io/");
  const peerlistPage = await peerlistPageData.text();

  // get build id using the regex pattern BUILD_REGEX
  const buildId = peerlistPage.match(BUILD_REGEX);
  if (!buildId) {
    return json(
      {
        error: "Could not find build id",
      },
      500
    );
  }
  const id = buildId[1];

  const profileUrl = `${BASE_URL}/${id}/${userId}.json`;
  const profile = await fetch(profileUrl);
  const profileData = await profile.json();

  const userData = profileData["pageProps"]["user"];
  if (!userData) {
    return json({ error: "User not found" }, 404);
  }

  return json(userData, 200);
};
