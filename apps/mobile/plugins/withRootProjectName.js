// El nombre visible lleva tilde y paréntesis; Gradle en Windows falla con ellos
// como nombre del proyecto raíz. Se fija un nombre interno ASCII.
const { withSettingsGradle } = require('expo/config-plugins');

module.exports = function withRootProjectName(config) {
  return withSettingsGradle(config, (cfg) => {
    cfg.modResults.contents = cfg.modResults.contents.replace(
      /rootProject\.name\s*=\s*['"].*['"]/,
      "rootProject.name = 'MedappDosis'",
    );
    return cfg;
  });
};
