// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  # ${data.title}

  # Table of Contents
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [Questions](#Questions)

  ## Description

  ## Installation

  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions

`;
}

module.exports = generateMarkdown;
