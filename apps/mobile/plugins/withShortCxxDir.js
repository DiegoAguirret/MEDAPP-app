// En Windows, el código C++ que genera React Native para el módulo `app` (por ejemplo, el de
// gesture-handler) produce rutas de más de 260 caracteres dentro de android/app/.cxx, y ninja
// falla si las rutas largas del sistema están desactivadas. Con MEDAPP_CXX_DIR (por ejemplo,
// C:/x) se compila en una carpeta corta. Sin la variable, no cambia nada.
const { withAppBuildGradle } = require('expo/config-plugins');

module.exports = function withShortCxxDir(config) {
  return withAppBuildGradle(config, (cfg) => {
    const dir = process.env.MEDAPP_CXX_DIR;
    if (!dir || cfg.modResults.contents.includes('buildStagingDirectory')) return cfg;
    const block = `
android {
    externalNativeBuild {
        cmake {
            buildStagingDirectory = file("${dir.replace(/\\/g, '/')}")
        }
    }
}
`;
    cfg.modResults.contents += block;
    return cfg;
  });
};
