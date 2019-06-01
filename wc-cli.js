const inquirer = require('inquirer');
const path = require('path');
const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');
const memFs = require('mem-fs');
const memFsEditor = require('mem-fs-editor');
const argv = require('minimist')(process.argv.slice(2));
const questions = require('./questions');
const mfsEditor = memFsEditor.create(memFs.create());

class WebComponentsCLI {
  constructor() {
    this.src = path.resolve(__dirname, './wc-boilerplate');
    this.dest = ''
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

  showError(message) {
    console.log(chalk.red(`[WC CLI] Error: ${message}`));
  }

  async load() {
    if (argv['_'].length > 0) {
      const name = argv['_'][0];
      this.dest = path.resolve(__dirname, name);

      await this.printLogo();
    
      const anwsers = await inquirer.prompt(questions);
      console.log('ANWERS:::::::::', name, anwsers);
      mfsEditor.copy(
        `${this.src}/babel-config.js`,
        `${this.staticPath}/${this.name}.html`
      );
    } else {
      this.showError('Type the name of your application!');
    }
  }
}

new WebComponentsCLI().load();
