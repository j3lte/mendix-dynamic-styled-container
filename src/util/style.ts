import { CSSProperties } from "react";

export const convertStylesStringToObject = (stringStyles: string): CSSProperties =>
    typeof stringStyles === "string"
        ? stringStyles.split(";").reduce((acc, style) => {
              const colonPosition = style.indexOf(":");

              if (colonPosition === -1) {
                  return acc;
              }

              const camelCaseProperty = style
                  .substring(0, colonPosition)
                  .trim()
                  .replace(/^-ms-/, "ms-")
                  .replace(/-./g, c => c.substring(1).toUpperCase());
              const value = style.substring(colonPosition + 1).trim();

              return value ? { ...acc, [camelCaseProperty]: value } : acc;
          }, {})
        : {};
