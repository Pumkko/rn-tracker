import type { JusticeCase } from "./JusticeCase";

const Cases: JusticeCase[] =
    [
      {
        name: `Le détail de l'histoire`,
        description:
            `La condamnation de Jean-Marie Le Pen pour contestation de crime contre 
        l’humanité est désormais définitive. La Cour de cassation a validé, mardi 27 mars, le
        jugement en appel qui avait infligé une amende de 30 000 euros à l’ancien président du
        Front national. Ce dernier avait de nouveau qualifié les chambres à gaz de « détail »
        de l’histoire de la seconde guerre mondiale en avril 2015.`,
        source: [{
          name: 'Le Monde',
          sourceUrl:
              'https://www.lemonde.fr/police-justice/article/2018/03/27/jean-marie-le-pen-definitivement-condamne-pour-ses-propos-sur-les-chambres-a-gaz_5277072_1653578.html'
        }],
        state: 'Condamné'
      },
      {
        name: `Affaire des assistants du FN au parlement européen`,
        description: `Conformément aux réquisitions du parquet de la juridiction
        interrégionale spécialisée financière du parquet de Paris, 28 personnes
        sont renvoyées devant la juridiction de jugement, parmi lesquelles le
        Rassemblement national, Marine Le Pen, Jean- Marie Le Pen ou Wallerand de
        Saint - Just`,
        source: [{
          name: 'France Info',
          sourceUrl:
              'https://www.francetvinfo.fr/politique/front-national/affaire-des-assistants-du-fn-au-parlement-europeen-marine-le-pen-et-une-vingtaine-d-autres-personnes-renvoyees-en-correctionnel-pour-detournement-de-fonds-publics_6230829.html'
        }],
        state: 'En Cours'
      }
    ]

    export default Cases;