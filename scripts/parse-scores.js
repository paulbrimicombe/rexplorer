#! /usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const REX_FACTOR_WINNERS = [
  "Alfred the Great",
  "Athelstan",
  "Cnut",
  "William the Conqueror",
  "Henry I",
  "Henry II",
  "Richard the Lionheart",
  "Edward I",
  "Edward III",
  "Henry V",
  "Edward IV",
  "Henry VIII",
  "Elizabeth I",
  "Charles II",
  "William III & Mary II",
  "William IV",
  "Victoria",
  "George V",
];

const CONSORT_MAPPING = {
  "Alfred the Great": ["Ealhswith"],
  "Edward the Elder": ["Ælfflæd", "Eadgifu of Kent"],
  "Edmund I": ["Ælfgifu of Shaftesbury", "Æthelflæd of Damerham"],
  Eadwig: ["Ælfgifu"],
  "Edgar the Peaceable": ["Æthelflæd Eneda", "Wulfthryth", "Ælfthryth"],
  "Aethelred the Unready": ["Ælfgifu of York", "Emma of Normandy"],
  "Sweyn Forkbeard": ["Sigrid the Haughty"],
  "Edmund Ironside": ["Ealdgyth"],
  Cnut: ["Emma of Normandy", "Ælfgifu of Northampton"],
  "Edward the Confessor": ["Edith of Wessex"],
  "Harold II": ["Ealdgyth of Mercia"],
  "William the Conqueror": ["Matilda of Flanders"],
  "Henry I": ["Matilda of Scotland", "Adeliza of Louvain"],
  Stephen: ["Matilda of Boulogne"],
};

const extractFields = (lines) => {
  return lines
    .shift()
    .split("\t")
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
  } else if (rawValue === "No") {
    return false;
  } else {
    return rawValue;
  }
};

const linesToJson = (fields, lines) => {
  return lines.map((line, index) => {
    const lineValues = line.split("\t");
    const entry = { index };
    lineValues.forEach((value, index) => {
      const key = fields[index];
      entry[key] = parseValue(value);
    });

    if (entry.rexFactor === undefined) {
      entry.rexFactor = REX_FACTOR_WINNERS.includes(entry.name);
    }

    return entry;
  });
};

const readTSV = (filePath) => {
  const lines = fs.readFileSync(filePath, "utf-8").trim().split("\n");
  const fields = extractFields(lines);
  return linesToJson(fields, lines);
};

const consortData = {
  scores: readTSV("data/consort-scores.tsv"),
};

const monarchData = {
  scores: readTSV("data/scores.tsv"),
};

const monarchResult = {
  scores: monarchData.scores.map((monarch) => {
    const consorts = (CONSORT_MAPPING[monarch.name] || []).flatMap((name) => {
      const consort = consortData.scores.find((consort) => {
        return consort.name === name;
      });
      return consort || [];
    });
    return {
      ...monarch,
      consorts,
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
      return monarch || [];
    });
    return {
      ...consort,
      monarchs,
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
      return [...teamScores, monarch];
    }
    const newEntries = monarch.consorts.map((consort) => {
      return {
        name: `${monarch.name} & ${consort.name}`,
        battleyness: combineScores(monarch, consort, 'battleyness'),
        scandal: combineScores(monarch, consort, 'scandal'),
        subjectivity: combineScores(monarch, consort, 'subjectivity'),
        longevity: combineScores(monarch, consort, 'longevity'),
        dynasty: combineScores(monarch, consort, 'dynasty'),
        total: combineScores(monarch, consort, 'total'),
        rexFactor: monarch.rexFactor && consort.rexFactor,
      };
    });

    return [...teamScores, ...newEntries];
  }, []),
};

fs.writeFileSync(
  path.join("src/routes/data/_teams.json"),
  JSON.stringify(teamsResult, null, 2)
);
