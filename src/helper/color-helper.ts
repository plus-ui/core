import colors from "tailwindcss/colors";

export class ColorHelper {
  /**
   * Parses a color string and extracts the tone and color name.
   *
   * @param {string} color - The color string in the format "colorName-tone".
   * @param {number} defaultTone - The default tone value to use if tone is not provided in the string.
   * @returns {Object} - An object containing the parsed tone and color name.
   */
  static parseColorString(color: any, defaultTone = 600) {
    // Check if the color string is empty or undefined
    if (!color) {
      return { tone: null, colorName: null };
    }

    // Split the color string into colorName and tone
    const [colorName, tone] = color.split("-");

    // Parse the tone as an integer or use the default tone
    const parsedTone = tone ? parseInt(tone) : defaultTone;

    // Return an object with the parsed values
    return {
      tone: parsedTone,
      colorName,
    };
  }

  /**
   * Generates CSS custom properties (variables) for a color and its tones.
   *
   * @param {Object} args - An object containing the color, variable name, and tones.
   * @param {string} args.color - The color name.
   * @param {string} args.variable - The CSS variable name for the color.
   * @param {Object} args.tones - An object containing tone definitions.
   * @returns {Object} - An object containing the generated CSS custom properties.
   */
  static generateColorVariables(args: object) {
    // Destructure arguments with default values
    const { color, variable, tones } = (args = Object.assign({
      variable: "--plus-color-default",
      defaultTone: "600",
      tones: {
        50: {},
        100: {},
        200: {},
        300: {},
        400: {},
        500: {},
        600: {},
        700: {},
        800: {},
        900: {},
        950: {},
      },
      args,
    }));

    // Check if the provided color exists in the 'colors' object
    if (!color || !colors[color]) {
      return {};
    }

    const result = {};

    // Check if the color value is a string, if so, set the CSS variable
    if (typeof colors[color] === "string") {
      result[variable] = colors[color];
    } else {
      // Generate CSS variables for each tone
      const toneList = Array.isArray(tones) ? tones : Object.keys(tones);
      toneList.forEach((tone) => {
        if (colors[color][tone]) {
          if (Array.isArray(tones[tone])) {
            tones[tone].forEach((item) => {
              result[`${variable}-${item}`] = colors[color][tone];
            });
          } else {
            result[`${variable}-${tone}`] = colors[color][tone];
          }
        }
      });
    }

    // Generate the return statement as a string
    const returnStatement = Object.keys(result)
      .map((key) => `--${variable}-${key}: ${result[key]};`)
      .join("\n");

    return returnStatement;
  }

  /**
   * Reverse a color to determine the best contrasting text color.
   *
   * @param {string} color - The color to reverse, either in hexadecimal or as a color name.
   * @returns {string} - The reversed text color, either "#334155" or "#fff".
   */
  static getContrastingTextColor(color) {
    // Check if the input color is in hexadecimal format or if it exists in the 'colors' object.
    let hexColor = this.isHex(color) ? color : colors[color]?.[500];

    // If a valid color is found, proceed with reversing it.
    if (hexColor) {
      // Normalize 3-character hexadecimal colors to 6 characters.
      if (hexColor.length === 4) {
        hexColor = `#${hexColor[1]}${hexColor[1]}${hexColor[2]}${hexColor[2]}${hexColor[3]}${hexColor[3]}`;
      }

      // Extract the red, green, and blue components from the hexadecimal color.
      const r = parseInt(hexColor.substring(1, 3), 16);
      const g = parseInt(hexColor.substring(3, 5), 16);
      const b = parseInt(hexColor.substring(5, 7), 16);

      // Calculate the YIQ (luminance) value to determine contrast.
      const yiq = (r * 299 + g * 587 + b * 114) / 1000;

      // Choose white (#fff) for light backgrounds and a darker color (#334155) for dark backgrounds.
      return yiq >= 200 ? "#334155" : "#fff";
    }
    // Return undefined if the color is not valid.
    return undefined;
  }

  /**
   * Check if a string is in hexadecimal color format.
   *
   * @param {string} str - The string to check.
   * @returns {boolean} - True if the string is a valid hexadecimal color; otherwise, false.
   */
  static isHex(str) {
    const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    return hexRegex.test(str);
  }

  /**
   * Convert an object to a CSS string.
   *
   * @param {Object} obj - The object to be converted to a CSS string.
   * @returns {string} - The CSS string representation of the object.
   */
  static objectToCssString(obj) {
    // Use Object.keys() and reduce() to iterate through the object and create a CSS string.
    return Object.keys(obj).reduce((acc, key) => {
      return `${acc}${key}:${obj[key]};`;
    }, "");
  }
}
