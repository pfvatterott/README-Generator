// function to generate markdown for README
function generateMarkdown(data) {

  let urlLink;
  if (data.logoURL != null) {
    urlLink = '<p align="center"><img src="' + data.logoURL + '"></p>';
  } else {
    urlLink = '';
  }

  let licenseText;
  if (data.license === 'BSD') {
    licenseText = 'BSD 2-Clause License <br>Copyright (c) 2021, ' + data.name + ' <br>All rights reserved.<br>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:<br>1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. <br>2. Redistributions in binary form must reproduce the above copyright notice,this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.<br>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
  }
  else if (data.license === 'MIT') {
    licenseText = 'MIT License <br>Copyright (c) 2021, ' + data.name + ' <br>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: <br>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. <br>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
  }
  else if (data.license === 'GPL') {
    licenseText = 'Copyright (C) 2021 ' + data.name + ' <br>This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. <br>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. <br>You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.'
  }

  return `

  ${urlLink}
  
  # ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-green)

  ## Description
  ${data.description}

  # Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${licenseText}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions

  If you have any questions please reach out through email or Github. <br>
  My email is ${data.email} <br>
  My Github can be accessed [here](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
