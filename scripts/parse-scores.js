#! /usr/bin/env node
// @ts-check

"use strict";

const fs = require("fs");
const path = require("path");

const CONSORT_MAPPING = {
  "Alfred the Great": ["Ealhswith"],
  "Edward the Elder": ["Ælfflæd", "Eadgifu of Kent"],
  "Edmund I": ["Ælfgifu of Shaftesbury", "Æthelflæd of Damerham"],
  Eadwig: ["Ælfgifu"],
  "Edgar the Peaceable": [
    "Æthelflæd Eneda / Candida",
    "Wulfthryth of Wilton",
    "Ælfthryth",
  ],
  "Aethelred the Unready": ["Ælfgifu of York", "Emma of Normandy"],
  "Sweyn Forkbeard": ["Sigrid the Haughty"],
  "Edmund Ironside": ["Ealdgyth"],
  Cnut: ["Emma of Normandy", "Ælfgifu of Northampton"],
  "Edward the Confessor": ["Edith of Wessex"],
  "Harold II": ["Edith of Mercia"],
  "William the Conqueror": ["Matilda of Flanders"],
  "Henry I": ["Matilda of Scotland", "Adeliza of Louvain"],
  Stephen: ["Matilda of Boulogne"],
  "Henry II": ["Eleanor of Aquitaine"],
  "Richard the Lionheart": ["Berengaria of Navarre"],
  John: ["Isabella of Angouleme"],
  "Henry III": ["Eleanor of Provence"],
  "Edward I": ["Eleanor of Castile", "Margaret of France"],
  "Edward II": ["Isabella of France"],
  "Edward III": ["Philippa of Hainault"],
  "Richard II": ["Anne of Bohemia", "Isabella of Valois"],
  "Henry IV": ["Joan of Navarre"],
  "Henry V": ["Catherine of Valois"],
  "Henry VI": ["Margaret of Anjou"],
  "Edward IV": ["Elizabeth Woodville"],
  "Richard III": ["Anne Neville"],
  "Henry VII": ["Elizabeth of York"],
  "Henry VIII": [
    "Katherine of Aragon",
    "Anne Boleyn",
    "Jane Seymour",
    "Anne of Cleves",
    "Katherine Howard",
    "Katherine Parr",
  ],
  "Mary I": ["Philip II of Spain"],
  "James I (VI)": ["Anne of Denmark"],
  "Charles I": ["Henrietta Maria of France"],
  "Oliver Cromwell": ["Elizabeth Cromwell"],
  "Charles II": ["Catherine of Braganza"],
  "James II (VII)": ["Mary of Modena"],
  Anne: ["Prince George of Denmark"],
  "George I": ["Sophia Dorothea of Celle"],
  "George II": ["Caroline of Ansbach"],
  "George III": ["Charlotte of Mecklenburg-Strelitz"],
  "George IV": ["Caroline of Brunswick"],
  "William IV": ["Adelaide of Saxe-Meiningen"],
};

const extractFields = (lines) => {
  return lines
    .shift()
    .split(",")
    .map((field) => {
      if (field === "RF?") {
        return "rexFactor";
      }

      if (field === "Monarch") {
        return "name";
      }

      if (field === "Consort") {
        return "name";
      }

      const firstCharacter = field.charAt(0);
      const rest = field.substring(1);
      return `${firstCharacter.toLocaleLowerCase()}${rest}`;
    });
};

const parseValue = (rawValue) => {
  const numericValue = Number.parseFloat(rawValue);
  if (Number.isFinite(numericValue)) {
    return numericValue;
  } else if (rawValue === "Yes") {
    return true;
  } else if (rawValue === "No" || rawValue === "N/A") {
    return false;
  } else if (rawValue?.startsWith('"') && rawValue?.endsWith('"')) {
    return rawValue.substring(1, rawValue.length - 1);
  } else {
    return rawValue;
  }
};

const linesToJson = (fields, lines) => {
  return lines.map((line, index) => {
    const lineValues = line.split(",");
    const entry = { index };
    lineValues.forEach((value, index) => {
      const key = fields[index];
      entry[key] = parseValue(value);
    });

    return entry;
  });
};

const readCSV = (filePath) => {
  const lines = fs.readFileSync(filePath, "utf-8").trim().split("\n");
  const fields = extractFields(lines);
  return linesToJson(fields, lines);
};

const allData = readCSV("data/data-8JbnE.csv");

const consortData = {
  scores: allData.filter((entry) => entry.series === "Consorts"),
};

const monarchData = {
  scores: allData.filter((entry) => entry.series === "England"),
};

const monarchResult = {
  scores: monarchData.scores.map((monarch) => {
    const consorts = (CONSORT_MAPPING[monarch.name] || []).flatMap((name) => {
      const consort = consortData.scores.find((consort) => {
        return consort.name === name;
      });

      if (!consort) {
        console.error("Missing consort " + CONSORT_MAPPING[monarch.name]);
      }
      return (
        {
          ...consort,
          name: [consort.name],
          rexFactor: [consort.rexFactor],
        } || []
      );
    });
    return {
      ...monarch,
      name: [monarch.name],
      rexFactor: [monarch.rexFactor],
      consorts,
      index: monarchData.scores.findIndex(
        (entry) => entry.name === monarch.name
      ),
    };
  }),
};

fs.writeFileSync(
  path.join("src/routes/data/_monarchs.json"),
  JSON.stringify(monarchResult, null, 2)
);

const consortResult = {
  scores: consortData.scores.map((consort) => {
    const monarchNames = Object.entries(CONSORT_MAPPING)
      .filter(([, value]) => value.includes(consort.name))
      .map(([monarchName]) => monarchName);
    const monarchs = monarchNames.flatMap((name) => {
      const monarch = monarchData.scores.find((monarch) => {
        return monarch.name === name;
      });

      if (!monarch) {
        console.error("Missing monarch " + name);
      }

      return (
        {
          ...monarch,
          name: [monarch.name],
          rexFactor: [monarch.rexFactor],
        } || []
      );
    });
    return {
      ...consort,
      name: [consort.name],
      rexFactor: [consort.rexFactor],
      monarchs,
      index: consortData.scores.findIndex(
        (entry) => entry.name === consort.name
      ),
    };
  }),
};

fs.writeFileSync(
  path.join("src/routes/data/_consorts.json"),
  JSON.stringify(consortResult, null, 2)
);

const combineScores = (monarch, consort, category) => {
  const meanScore = (monarch[category] + consort[category]) / 2;
  return Math.round(meanScore * 100) / 100;
};

const teamsResult = {
  scores: monarchResult.scores.reduce((teamScores, monarch) => {
    if (monarch.consorts.length === 0) {
      return teamScores;
    }

    const newEntries = monarch.consorts.map((consort) => {
      return {
        name: [...monarch.name, ...consort.name],
        battleyness: combineScores(monarch, consort, "battleyness"),
        scandal: combineScores(monarch, consort, "scandal"),
        subjectivity: combineScores(monarch, consort, "subjectivity"),
        longevity: combineScores(monarch, consort, "longevity"),
        dynasty: combineScores(monarch, consort, "dynasty"),
        total: combineScores(monarch, consort, "total"),
        rexFactor: [...monarch.rexFactor, ...consort.rexFactor],
        index: teamScores.length,
        linkedRatings: [
          { ...monarch, consorts: undefined },
          { ...consort, monarchs: undefined },
        ],
      };
    });

    return [...teamScores, ...newEntries];
  }, []),
};

fs.writeFileSync(
  path.join("src/routes/data/_teams.json"),
  JSON.stringify(teamsResult, null, 2)
);
