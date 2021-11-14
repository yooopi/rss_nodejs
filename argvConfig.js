const ARGV_CONFIG = [
  { name: "config", alias: "--config", shortAlias: "-c", description: "smth" },
  { name: "input", alias: "--input", shortAlias: "-i", description: "smth" },
  { name: "output", alias: "--output", shortAlias: "-o", description: "smth" },
];

exports.ARGV_CONFIG = ARGV_CONFIG;

exports.VALID_ARGUMENTS = ARGV_CONFIG.map((item) => {
  return item.name;
});
