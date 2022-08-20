// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = license.replace(/\s/g,"%20")
  if (license === "MIT") {
    return `https://img.shields.io/badge/license-${badge}-blue`
  } else if (license === "APACHE 2.0") {
    return `https://img.shields.io/badge/license-${badge}-blue`
  } else if (license === "GPL 3.0") {
    return `https://img.shields.io/badge/license-${badge}-blue`
  } else if (license === "BSD 3") {
    return `https://img.shields.io/badge/license-${badge}-blue`
  } else if (license === "None") {
    return ""
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "MIT description"
  } else if (license === "APACHE 2.0") {
    return "APACHE 2.0 description"
  } else if (license === "GPL 3.0") {
    return "GPL 3.0 description"
  } else if (license === "BSD 3") {
    return "BSD 3 description"
  } else if (license === "None") {
    return ""
  }

};


// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
//   `;
// }

// module.exports = generateMarkdown;



const generateMarkdown = ({ github, email, title, description, license, installation, tests, usage, contributing }) =>
{
  return `# ${title} ![license](${renderLicenseBadge(license)})
## ${description}


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
<https://github.com/monicadolce>
${github}
${email}
  `

}


  // `<!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <meta charset="UTF-8">
  //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  //   <title>Document</title>
  // </head>
  // <body>
  //   <div class="jumbotron jumbotron-fluid">
  //   <div class="container">
  //     <h1 class="display-4">Project ${title}</h1>
  //     <p class="lead">The purpose of this application is to ${description}.</p>
  //     <p class="lead">Install the application by ${installation}.</p>
  //     <p class="lead">Usage information ${usage}.</p>
  //     <p class="lead">Select a license ${license}.</p>
  //     <p class="lead">Contribution guidelines ${contributing}.</p>
  //     <p class="lead">Test instructions ${tests}.</p>
  //     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  //     <ul class="list-group">
  //       <li class="list-group-item">My GitHub username is ${github}</li>
  //       <li class="list-group-item">Enter email to contact me ${email}</li>
  //     </ul>
  //   </div>
  // </div>
  // </body>
  // </html>`;


  module.exports = generateMarkdown;
