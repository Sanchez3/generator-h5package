const path = require('path');
const chalk = require('chalk');
const util = require('util');
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const foldername = path.basename(process.cwd());

module.exports = class extends Generator {
    initializing() {
        this.props = {};
    }
    prompting() {
        this.log(yosay(
            '~' + chalk.red('generator-h5package') + '~'
        ));
        return this.prompt([{
                type: 'input',
                name: 'projectName',
                message: 'What\'s the name of your application',
                default: foldername
            },
            {
                type: 'input',
                name: 'projectDesc',
                message: 'What\'s the description of your application:'
            },
            {
                type: 'list',
                name: 'projectLicense',
                message: 'Please choose license:',
                choices: ['MIT', 'ISC', 'Apache-2.0', 'AGPL-3.0']
            }
        ]).then(answers => {
            this.projectName = answers.projectName ? answers.projectName : ' ';
            this.projectDesc = answers.projectDesc ? answers.projectDesc : ' ';
            this.projectLicense = answers.projectLicense || 'MIT';
        });
    }
    configuring() {
        this.config.set('projectName', this.projectName);
        this.config.set('projectDesc', this.projectDesc);
        this.config.set('projectLicense', this.projectLicense);
    }
    writing() {
        this.fs.copyTpl(
            this.templatePath('src'),
            this.destinationPath('src'),
            this
        );
        mkdirp('src/assets/media');
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            this
        );
        this.fs.copy(
            this.templatePath('_webpack.common.js'),
            this.destinationPath('webpack.config.js'),
            this
        );
        this.fs.copy(
            this.templatePath('_webpack.dev.js'),
            this.destinationPath('webpack.config.js'),
            this
        );
        this.fs.copy(
            this.templatePath('_webpack.prod.js'),
            this.destinationPath('webpack.config.js'),
            this
        );

    }
    install() { //安装依赖
        this.installDependencies({ bower: false });
    }
};