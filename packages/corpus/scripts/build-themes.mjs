import StyleDictionary from "style-dictionary-utils";
import { shadowCss } from "style-dictionary-utils/dist/transformer/shadow-css.js";
import { transformTokens } from "token-transformer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import util from "util";
import prettier from "prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

StyleDictionary.registerTransform({
  ...shadowCss,
  name: "boxShadow/css",
  matcher: (prop) => {
    return prop.type === "boxShadow";
  },
});

StyleDictionary.registerTransform({
  type: "value",
  name: "color/tailwind",
  matcher: (prop) => {
    return prop.type === "color";
  },
  transformer: (prop) => {
    return prop.value;
  },
});

const setInObject = (obj, path, value) => {
  const [head, ...tail] = path;

  if (tail.length === 0) {
    obj[head] = value;
  } else {
    obj[head] = obj[head] || {};
    setInObject(obj[head], tail, value);
  }
};

const template = ({
  colors,
  screens,
  spacing,
  elevation,
  border,
  layer,
  opacity,
  typography,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  borderRadius,
  borderWidth,
}) => {
  return `
  import plugin from 'tailwindcss/plugin';

  export default {
    theme: {
      colors: ${util.inspect(colors)},
      screens: ${util.inspect(screens)},
      spacing: ${util.inspect(spacing)},
      opacity: ${util.inspect(opacity)},
      fontFamily: ${util.inspect(fontFamily)},
      fontSize: ${util.inspect(fontSize)},
      fontWeight: ${util.inspect(fontWeight)},
      letterSpacing: ${util.inspect(letterSpacing)},
      lineHeight: ${util.inspect(lineHeight)},
      borderRadius: ${util.inspect(borderRadius)},
      borderWidth: ${util.inspect(borderWidth)},
    },
    plugins: [
      plugin(function({ addUtilities }) {
        addUtilities(${util.inspect(elevation)})
        addUtilities(${util.inspect(border)})
        addUtilities(${util.inspect(layer)})
        addUtilities(${util.inspect(typography)})
      })
    ]
  }
  `;
};

const cssTemplate = () => `
  @import "./variables.css";
  @import url('@fontsource-variable/mulish');
  @import url('@fontsource-variable/mulish/wght-italic.css');
  @import url('@fontsource/gentium-book-basic/latin-700.css');
  @import url('@fontsource/gentium-book-basic/latin-700-italic.css');
  @import "./reset.css";

  @tailwind components;
  @tailwind utilities;
`;

const transformColorsToTailwind = (colors) => {
  const obj = {};
  Object.entries(colors).forEach(([k, v]) => {
    if (v.value) {
      setInObject(obj, [k], v.value);
    } else {
      Object.entries(v).forEach(([k2, v2]) => {
        setInObject(obj, [k, k2], v2.value);
      });
    }
  });
  return obj;
};

const transformElevationToTailwindUtils = (elevation) => {
  const obj = {};
  Object.entries(elevation).forEach(([k, v]) => {
    setInObject(obj, [`.elevation-${k}`], {
      [`box-shadow`]: v.value,
    });
  });
  return obj;
};

const transformBordersToTailwindUtils = (borders) => {
  const obj = {};
  Object.entries(borders).forEach(([k, v]) => {
    setInObject(obj, [`.border-${k}`], {
      [`border`]: v.value,
    });
  });
  return obj;
};

const transformLayerToTailwindUtils = (borders) => {
  const obj = {};
  Object.entries(borders).forEach(([k, v]) => {
    setInObject(obj, [`.layer-${k}`], {
      [`z-index`]: `${v.value}`,
    });
  });
  return obj;
};

const transformTypographyToTailwindUtils = (typography) => {
  const obj = {};

  const go = (c, prefix = ".typography") => {
    Object.entries(c).forEach(([k, v]) => {
      if (v.value) {
        setInObject(obj, [`${prefix}-${k}`], { font: v.value });
      } else {
        go(v, `${prefix}-${k}`);
      }
    });
  };

  go(typography);

  return obj;
};

const toKeyValue = (obj) => {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    acc[`${k}`] = `${v.value}`;
    return acc;
  }, {});
};

// We create a custom formatter for theme dictionary which will write it's output to a tailwind config.
StyleDictionary.registerFormat({
  name: "tailwind",
  formatter: function (dictionary) {
    return template({
      colors: transformColorsToTailwind(dictionary.tokens.color.palette),
      screens: toKeyValue(dictionary.tokens.breakpoint),
      spacing: toKeyValue(dictionary.tokens.spacing),
      elevation: transformElevationToTailwindUtils(dictionary.tokens.elevation),
      border: transformBordersToTailwindUtils(dictionary.tokens.border),
      layer: transformLayerToTailwindUtils(dictionary.tokens.layer),
      opacity: toKeyValue(dictionary.tokens.opacity),
      fontFamily: toKeyValue(dictionary.tokens.fontFamily),
      fontSize: toKeyValue(dictionary.tokens.fontSize),
      fontWeight: toKeyValue(dictionary.tokens.fontWeight),
      lineHeight: toKeyValue(dictionary.tokens.lineHeight),
      letterSpacing: toKeyValue(dictionary.tokens.letterSpacing),
      borderRadius: toKeyValue(dictionary.tokens.borderRadius),
      borderWidth: toKeyValue(dictionary.tokens.borderWidth),
      typography: transformTypographyToTailwindUtils(
        dictionary.tokens.typography
      ),
    });
  },
});

const rawJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, `../tokens/tokens.json`), "utf8")
);
const themes = ["patient", "pro"];
const createThemes = () => {
  themes.forEach((theme) => {
    // The generated tokens file contains tokens for all the themes.
    // We need to filter out the tokens for the current theme.
    const themeJson = {
      core: rawJson.core,
      [`${theme}/typography`]: rawJson[`${theme}/typography`],
      [`${theme}/component`]: rawJson[`${theme}/component`],
    };

    // Theme dictionary expects the tokens to be in a file. So we write the filtered tokens to a file.
    const output = path.resolve(__dirname, `../themes/${theme}`, "tokens.json");
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(
      path.resolve(output),
      JSON.stringify(transformTokens(themeJson), null, 2)
    );

    // Then we call theme dictionary to parse the tokens and generate the tailwind config.
    const themeDictionary = StyleDictionary.extend({
      source: [path.resolve(__dirname, `../themes/${theme}/tokens.json`)],
      platforms: {
        css: {
          transformGroup: "css",
          buildPath: "themes/",
          transforms: [
            "name/cti/kebab",
            "font/css",
            "boxShadow/css",
            "border/css",
          ],
          files: [
            {
              destination: `${theme}/variables.css`,
              format: "css/variables",
              filter: (props) => {
                return (
                  props.path[0] === "component" || props.path[0] === "sizing"
                );
              },
            },
          ],
        },
        tailwind: {
          transformGroup: "tailwind",
          buildPath: "themes/",
          transforms: [
            "name/cti/kebab",
            "font/css",
            "boxShadow/css",
            "border/css",
          ],
          files: [
            {
              destination: `${theme}/index.ts`,
              format: "tailwind",
              options: {
                theme: theme,
              },
            },
          ],
        },
        ts: {
          "transformGroup": "js",
          buildPath: "themes/",
          transforms: [
            "name/cti/camel",
            "font/css",
            "boxShadow/css",
            "border/css",
          ],
          "files": [
            {
              "format": "javascript/module",
              "destination": `${theme}/tokens.js`
            },
            {
              "format": "typescript/module-declarations",
              "destination": `${theme}/tokens.d.ts`
            }
          ] 
        }
      },
    });

    const css = cssTemplate();

    fs.writeFileSync(
      path.resolve(__dirname, `../themes/${theme}`, "index.css"),
      css
    );

    themeDictionary.buildAllPlatforms();
  });
};

const formatThemes = () => {
  themes.forEach(async (theme) => {
    const output = path.resolve(
      __dirname,
      `../themes/${theme}`,
      `index.ts`
    );
    const formatted = await prettier.format(fs.readFileSync(output, "utf8"), {
      parser: "babel",
    });
    fs.writeFileSync(output, formatted);
    fs.copyFileSync(
      path.resolve(__dirname, `../reset.css`),
      path.resolve(__dirname, `../themes/${theme}`, `reset.css`),
    )
  });
};

createThemes();
formatThemes();
