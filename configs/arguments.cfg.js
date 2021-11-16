exports.ARGUMENTS_CONFIG = [
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

exports.VALID_ARGUMENTS = this.ARGUMENTS_CONFIG.map((item) => {
  return item.name;
});

exports.REQUIRED_ARGUMENTS = this.ARGUMENTS_CONFIG.filter(
  (item) => item.isRequired
).map((item) => item.name);
