# SVG to TSX Converter with Gulp

This project automates the conversion of SVG files into React TSX components using Gulp. It reads SVG files from a source directory, wraps them inside React components, and outputs them as `.tsx` files.

## Features

- Converts all SVG files in a directory to individual `.tsx` components.
- Automatically generates a React component with the SVG content.
- Saves the converted TSX files to a specified output directory.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm/pnpm.
- You have a basic understanding of Gulp and React components.

## Getting Started

### 1. Clone the repository:

```bash
git clone <>
cd <project-directory>


### 2. Install the dependencies:

You can install the project dependencies using npm or pnpm:

```bash
# Using npm
npm install

# OR using pnpm
pnpm install
```


### 3. Project Structure
Ensure your project is structured as follows:

```graphql

project-root/
│
├── src/
│   ├── icons/
│   │   └── example.svg   # SVG files that need to be converted
│   └── components/
│       └── icons/        # The TSX files will be saved here
│
├── gulpfile.js           # Gulp configuration
├── package.json
└── README.md
```

### 4. Configure the Paths
## In the gulpfile.js, update the source and destination paths for the SVG and TSX files if necessary:

```js

return gulp.src('src/icons/*.svg') // Source directory for SVG files
fs.writeFileSync(`src/components/icons/${componentName}.tsx`, tsxContent); // Output directory for TSX files
```
### 5. Running the Gulp Task
## Once everything is set up, run the Gulp task to convert your SVG files:

```bash

gulp
```
# This will process all .svg files located in the src/icons/ directory and generate corresponding .tsx React components inside the src/components/icons/ directory.

### 6. Output Example
## If you have a file example.svg in the src/icons/ folder, it will generate the following example.tsx file:

```tsx


import React from 'react';

const Example = (props) => (
  <svg>...</svg>  // SVG content goes here
);

export default Example;
```
### Customization
## Modify Component Template
If you need to customize the structure of the React component being generated, you can modify the wrapSvgInTsx function in the gulpfile.js:

```js

const wrapSvgInTsx = (svgContent, componentName) => {
  return `
import React from 'react';

const ${componentName} = (props) => (
  ${svgContent}
);

export default ${componentName};
  `;
};
```
You can modify this to add props, types, or any additional logic needed for your components.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
