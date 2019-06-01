const inquirer = require('inquirer');
const path = require('path');
const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');
const questions = require('./questions');

class WebComponentsCLI {
  constructor() {
    this.root = path.resolve(__dirname, './src');
  }

  printLogo() {
    clear();
    console.log(
      chalk.yellow(
        figlet.textSync('Web Components', {
          horizontalLayout: 'default',
          verticalLayout: 'default'
        })
      )
    );
  }

  async load() {
    await this.printLogo();
    const anwsers = await inquirer.prompt(questions);
    console.log('ANWERS:::::::::', anwsers);
  }
}

new WebComponentsCLI().load();
