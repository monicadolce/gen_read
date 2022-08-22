// Function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = license.replace(/\s/g, "%20")
  if (license === "MIT") {
    return `https://img.shields.io/badge/license-${badge}-blue`
  } else if (license === "APACHE 2.0") {
    return `https://img.shields.io/badge/license-${badge}-blue`
  } else if (license === "GPL 3.0") {
    return `https://img.shields.io/badge/license-${badge}-blue`
  } else if (license === "BSD 3") {
    return `https://img.shields.io/badge/license-${badge}-blue`
  } else if (license === "None") {
    return "";
  }
};

// Function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  } else if (license === "APACHE 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === "GPL 3.0") {
    return `https://opensource.org/licenses/GPL-3.0`
  } else if (license === "BSD 3") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else if (license === "None") {
    return "";
  }

};


// Function generates markdown for README
const generateMarkdown = ({ github, email, title, description, license, installation, tests, usage, contributing }) => {
  return `# ${title} ![license](${renderLicenseBadge(license)})
## Description
 ${description}  


## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)


## Installation
${installation}


## Usage
${usage}


## License 
${renderLicenseSection(license)}


## Contributing
${contributing}


## Tests
${tests}


## Questions
Please contact me at ${email} with any questions.  
GitHub username: ${github}  
Check out my [GitHub Profile](https://github.com/monicadolce)
 `

}

module.exports = generateMarkdown;
