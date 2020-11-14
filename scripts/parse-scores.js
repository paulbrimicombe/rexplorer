#! /usr/bin/env node
"use strict";

const fs = require("fs");

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
  "King Stephen": ["Matilda of Boulogne"],
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

const consortLines = fs
  .readFileSync("data/consort-scores.tsv", "utf-8")
  .trim()
  .split("\n");
const consortFields = extractFields(consortLines);

const consortData = {
  consorts: [],
};

consortLines.forEach((line) => {
  const entries = line.split("\t");
  const consortEntry = {};
  consortData.consorts.push(consortEntry);
  entries.forEach((value, index) => {
    const key = consortFields[index];
    consortEntry[key] = parseValue(value);
  });
});

const monarchLines = fs
  .readFileSync("data/scores.tsv", "utf-8")
  .trim()
  .split("\n");
const monarchFields = extractFields(monarchLines);

const result = {
  monarchs: [],
};

monarchLines.forEach((line, index) => {
  const entries = line.split("\t");
  const monarchEntry = {};
  result.monarchs.push(monarchEntry);
  entries.forEach((value, index) => {
    const key = monarchFields[index];
    monarchEntry[key] = parseValue(value);
  });

  monarchEntry.index = index;
  monarchEntry.rexFactor = REX_FACTOR_WINNERS.includes(monarchEntry.name);
  monarchEntry.consorts = (CONSORT_MAPPING[monarchEntry.name] || []).flatMap(
    (name) =>
      consortData.consorts.find((consort) => {
        return consort.name === name || [];
      })
  );
});

console.log(JSON.stringify(result, null, 2));
