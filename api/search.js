export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({
            error: "Method not allowed"
        });

    }

    const { pregunta } = req.body;

    // Simulación de IA
    // En la siguiente versión aquí conectaremos OpenAI

    const respuesta = generarRespuesta(pregunta);

    res.status(200).json(respuesta);

}

function generarRespuesta(pregunta){

    const texto = pregunta.toLowerCase();

    if(texto.includes("soledad")){

        return {

            tema:"Soledad",

            paises:[
                "España",
                "Japón",
                "Estados Unidos",
                "Suecia"
            ],

            resumen:
            "La soledad afecta de manera diferente a cada país. ATLAS irá mostrando datos, organizaciones y proyectos específicos para cada uno."

        };

    }

    if(texto.includes("agua")){

        return{

            tema:"Acceso al agua",

            paises:[
                "Kenia",
                "India",
                "Etiopía"
            ],

            resumen:
            "El acceso al agua potable sigue siendo uno de los grandes retos mundiales."

        }

    }

    if(texto.includes("bosques") || texto.includes("deforestacion")){

        return{

            tema:"Deforestación",

            paises:[
                "Brasil",
                "Indonesia",
                "Perú"
            ],

            resumen:
            "La pérdida de bosques es uno de los desafíos ambientales más importantes."

        }

    }

    return{

        tema:"General",

        paises:[],

        resumen:
        "Todavía estamos aprendiendo sobre esta pregunta."

    }

}
