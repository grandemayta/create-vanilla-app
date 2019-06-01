#!/usr/bin/env node
const inquirer = require('inquirer');
const path = require('path');
const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');
const memFs = require('mem-fs');
const memFsEditor = require('mem-fs-editor');
const npm = require('npm');
const argv = require('minimist')(process.argv.slice(2));
const questions = require('./questions');
const mfsEditor = memFsEditor.create(memFs.create());

class WebComponentsCLI {
  constructor() {
    this.src = path.resolve(__dirname, './wc-boilerplate');
    this.dest = ''
    this.log = console.log;
  }

  showLogo() {
    clear();
    this.log(
      chalk.yellow(
        figlet.textSync('Web Components', {
          horizontalLayout: 'default',
          verticalLayout: 'default'
        })
      )
    );
  }

  showInfo(message) {
    this.log(chalk.blue(`[WC CLI] Info: ${message}`));
  }

  showSuccess(message) {
    this.log(chalk.green(`[WC CLI] Success: ${message}`));
  }

  showError(message) {
    this.log(chalk.red(`[WC CLI] Error: ${message}`));
  }

  copyBoilerplate(projectData) {
    mfsEditor.copyTpl(
      `${this.src}`,
      `${this.dest}`,
      projectData
    );
  }

  async createProject() {
    const name = argv['_'][0];
    this.dest = path.resolve(name);

    await this.showLogo();
    
    const anwsers = await inquirer.prompt(questions);

    this.copyBoilerplate({name, ...anwsers});

    mfsEditor.commit(() => {
      process.chdir(this.dest);
      npm.load(() => npm.commands.install([], () => {
        this.showSuccess(`${name} project has been successfully created!`);
        this.showInfo('To launch the application just type npm start');
      }));
    });
  }

  load() {
    if (argv['_'].length > 0) {
      this.createProject();
    } else {
      this.showError('Type the name of your application!');
    }
  }
}

new WebComponentsCLI().load();
