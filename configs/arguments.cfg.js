exports.ARGUMENTS_CONFIG = [
  { name: "config", alias: "--config", shortAlias: "-c", description: "smth" },
  { name: "input", alias: "--input", shortAlias: "-i", description: "smth" },
  { name: "output", alias: "--output", shortAlias: "-o", description: "smth" },
];

exports.VALID_ARGUMENTS = this.ARGUMENTS_CONFIG.map((item) => {
  return item.name;
});
