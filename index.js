const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')
const triangleSVG = ()=>`<svg height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text></text></svg>`
const squareSVG = ()=>`<svg width="200" height="300">
<rect width="200" height="200" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
</svg>`
const circleSVG = ()=>`<svg height="200" width="300">
<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>`
// function that takes in color and place in 'fill=..'

// text tag in svg

function generateLogo(data){
  const triangle = new shapes.Triangle(data.text, data.color, data.shape)
  console.log(triangle)
    return triangle.renderTriangle()
};
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to 3 characters for the text of your logo:',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter the color keyword or hexadecimal number for the color of your logo:',
      name: 'color',
    },

    {
      type: 'list',
      message: 'Select the shape of your logo:',
      choices: ['circle','triangle','square',],
      name: 'shape',
    },

  ])
  .then((response) =>
    fs.writeFileSync('logo.svg', generateLogo(response))
  );