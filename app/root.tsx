import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import styles from "./tailwind.css";

export const meta: MetaFunction = () => {
  return { title: "Unofficial peerlist API" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script
          async
          defer
          data-website-id="ecf058c7-3702-4f62-ab4e-e1fee50c6cc8"
          src="https://umami-vercel-gold.vercel.app/umami.js"
        ></script>
      </head>
      <body className="bg-lime-50 px-16 py-4 mx-16 my-4 max-w-none text-black prose-xl">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        Built by{" "}
        <a
          href="https://twitter.com/gillarohith"
          className="underline  text-sky-500 decoration-sky-500 hover:text-sky-500 visited:text-sky-600"
        >
          Rohith Gilla
        </a>
      </body>
    </html>
  );
}
