import fetch, { Request, Headers, Response } from "node-fetch";

function localFetch(url, options) {
  return fetch(
    url.startsWith("http") ? url : "http://localhost:3000" + url,
    options
  );
}

export { localFetch as default, Request, Headers, Response };
