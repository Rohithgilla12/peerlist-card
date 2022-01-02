export default function Index() {
  return (
    <div className="center">
      <h1 className="text-2xl font-bold underline text-center my-2 decoration-pink-500 decoration-2">
        Welcome to the unofficial peerlist API
      </h1>
      <h2 className="text-center py-4 underline decoration-cyan-300 text-2xl mb-4 font-semibold">
        This is how you can use this API to get peerlist stats of that user.
      </h2>

      <ul className="list-disc">
        <li>
          You will need the username of the profile which you need the data
        </li>
        <li>The endpoint will return a JSON object of the user details</li>
        <li>
          End point{" "}
          <a
            href="https://peerlist-card.rohithgilla.workers.dev/users/rohithgilla"
            className="underline text-sky-500 decoration-sky-500 hover:text-sky-500 visited:text-sky-600"
          >
            https://peerlist-card.rohithgilla.workers.dev/users/rohithgilla
          </a>
        </li>
        <li>
          You can replace <b>rohithgilla</b> with your username and get the
          stats 🥳
        </li>
      </ul>

      <h2 className="text-center py-4 underline decoration-cyan-300 text-2xl mb-4 font-semibold">
        Future Roadmap
      </h2>
      <ul className="list-disc">
        <li>
          Add an endpoint which will generate SVG image which you can embed in
          your website or github readme file
        </li>
        <li>Maybe a mobile app with Flutter or Expo</li>
      </ul>
    </div>
  );
}
