import type { JusticeCase } from "./JusticeCase";

const Cases: JusticeCase[] = [
    {
        description: `Conformément aux réquisitions du parquet de la juridiction
        interrégionale spécialisée financière du parquet de Paris, 28 personnes
        sont renvoyées devant la juridiction de jugement, parmi lesquelles le
        Rassemblement national, Marine Le Pen, Jean- Marie Le Pen ou Wallerand de
        Saint - Just`,
        source: [
            {
                name: "France Info",
                sourceUrl: "https://www.francetvinfo.fr/politique/front-national/affaire-des-assistants-du-fn-au-parlement-europeen-marine-le-pen-et-une-vingtaine-d-autres-personnes-renvoyees-en-correctionnel-pour-detournement-de-fonds-publics_6230829.html"
            }
        ],
        state: "En Cours"
    }
]

export default Cases;