export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    const { pregunta } = req.body;

    const url =
      "https://es.wikipedia.org/w/api.php?" +
      new URLSearchParams({
        action: "query",
        list: "search",
        srsearch: pregunta,
        utf8: "1",
        format: "json"
      });

    const respuesta = await fetch(url, {
      headers: {
        "User-Agent": "ATLAS/1.0"
      }
    });

    const wikipedia = await respuesta.json();

    if (
      !wikipedia.query ||
      wikipedia.query.search.length === 0
    ) {

      return res.status(200).json({

        tema: pregunta,

        resumen:
          "No hemos encontrado información todavía.",

        paises: []

      });

    }

    const articulo = wikipedia.query.search[0];

    return res.status(200).json({

      tema: pregunta,

      resumen: articulo.snippet.replace(/<[^>]+>/g,""),

      paises: [],

      wikipedia:
      "https://es.wikipedia.org/wiki/" +
      encodeURIComponent(
        articulo.title.replace(/ /g,"_")
      )

    });

  }

  catch(error){

    return res.status(500).json({

      error:error.message

    });

  }

}
