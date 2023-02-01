import ReactDOMServer from "react-dom/server";

async function fetchImport() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await import("remote2/APP")).default;
      resolve(
        ReactDOMServer.renderToString(
          res({
            caption: "React Button in vue",
          })
        )
      );
    } catch (err) {
      reject(err);
    }
  });
}

export default fetchImport