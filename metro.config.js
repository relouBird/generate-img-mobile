const { getDefaultConfig } = require("expo/metro-config");
const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = false;
config.maxWorkers = 2; // ← réduit les workers parallèles = moins de fichiers ouverts

module.exports = config;
