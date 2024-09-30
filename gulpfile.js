const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const rename = require("gulp-rename");

// Function to wrap SVG content in TSX
const wrapSvgInTsx = (svgContent, componentName) => {
  return `
import React from 'react';

const ${componentName} = (props) => (
  ${svgContent}
);

export default ${componentName};
  `;
};

// Task to convert SVGs to TSX components
gulp.task("svg-to-tsx", () => {
  return gulp
    .src("src/icons/*.svg") // Adjust the source path for your SVGs
    .on("data", (file) => {
      const fileName = path.basename(file.path, ".svg");
      const componentName =
        fileName.charAt(0).toUpperCase() + fileName.slice(1);
      const svgContent = fs.readFileSync(file.path, "utf8");

      const tsxContent = wrapSvgInTsx(svgContent, componentName);

      // Write the TSX file
      fs.writeFileSync(`src/components/icons/${componentName}.tsx`, tsxContent); // Adjust the output path
    });
});

// Default task
gulp.task("default", gulp.series("svg-to-tsx"));
