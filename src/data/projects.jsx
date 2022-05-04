import calculator from '../assets/images/calc2.png'
import morsecode_translator from '../assets/images/morsecodetranslator.png'
import game from '../assets/images/game.png'
import brewdogAPI from '../assets/images/brewdogAPI.png'

// file size for images should be 415 x 491 px

const projects = [
  {
    projectImage: `${calculator}`,
    projectInfo: "Using 2 weeks worth of HTML, CSS and Javascript, I built a fully functioning calculator, capable of basic arithmetic, inverting the sign, working out percentages and use of decimal point. I also handled some common exceptions such as capping the display at 8 digits, rounding off recurring decimals and stopping the user from inputting multiple decimal points in one string.",
    projectCode: "https://github.com/EmmaSmith1988/calculator",
    projectSite: "https://emmasmith1988.github.io/calculator/"
  },
  {
    projectImage: `${morsecode_translator}`,
    projectInfo: "This is my morse code translator, coded using HTML, SCSS and Javascript during a morning session of week 2 of my Nology course. It has a working test file app.test.js and was written with a TDD approach, as I wrote all the test first and then wrote the functions to pass the tests.",
    projectCode: "https://github.com/EmmaSmith1988/Morse-code-translator",
    projectSite: "https://emmasmith1988.github.io/Morse-code-translator/"
  },
  {
    projectImage: `${game}`,
    projectInfo: "After learning Javascript for 3 weeks, I created a version of the game Towers of Hanoi using Javascript, HTML and SCSS. I coded a way to change the difficulty of the game as well as a counter that updates every time you drop a block.",
    projectCode: "https://github.com/EmmaSmith1988/Towers-of-Hanoi",
    projectSite: "https://emmasmith1988.github.io/Towers-of-Hanoi/"
  },
  {
    projectImage: `${brewdogAPI}`,
    projectInfo: "This is my Brewdog API project, coded using React and SCSS, pulling information from the Brewdog API to create a user friendly search engine of Brewdog's many offerings.",
    projectCode: "https://github.com/EmmaSmith1988/Punk-API",
    projectSite: "https://emmasmith1988.github.io/Punk-API/"
  },
]

export default projects;