const ARGUMENTS_CONFIG = [
  {
    name: "config",
    alias: "--config",
    shortAlias: "-c",
    isRequired: true,
    description: "smth",
  },
  {
    name: "input",
    alias: "--input",
    shortAlias: "-i",
    isRequired: false,
    description: "smth",
  },
  {
    name: "output",
    alias: "--output",
    shortAlias: "-o",
    isRequired: false,
    description: "smth",
  },
];

const VALID_ARGUMENTS = ARGUMENTS_CONFIG.map((item) => item.name);

const REQUIRED_ARGUMENTS = ARGUMENTS_CONFIG.filter(
  (item) => item.isRequired
).map((item) => item.name);

module.exports = {
  ARGUMENTS_CONFIG,
  VALID_ARGUMENTS,
  REQUIRED_ARGUMENTS,
};
