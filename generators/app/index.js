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
                message: 'What\'s the description of your application(optional):'
            },
            {
                type: 'list',
                name: 'projectLicense',
                message: 'Please choose license:',
                choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'Others'],
                default: 'MIT'
            }
        ]).then(answers => {
            this.projectName = answers.projectName ? answers.projectName : foldername;
            this.projectDesc = answers.projectDesc ? answers.projectDesc : '';
            this.projectLicense = answers.projectLicense ? (answers.projectLicense === 'Others' ? '' : answers.projectLicense) : 'MIT';
        });
    }
    configuring() {
        this.config.set('projectName', this.projectName);
        this.config.set('projectDesc', this.projectDesc);
        this.config.set('projectLicense', this.projectLicense);
    }
    writing() {
        this.fs.copyTpl(
            this.templatePath('src/index.html'),
            this.destinationPath('src/index.html'),
            this
        );
        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            this
        );
        this.fs.copy(
            this.templatePath('src/assets/**'),
            this.destinationPath('src/assets/'),
            this
        );
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            this
        );
        mkdirp('src/assets/media');
        this.fs.copy(
            this.templatePath('_webpack.common.js'),
            this.destinationPath('webpack.common.js'),
            this
        );
        this.fs.copy(
            this.templatePath('_webpack.dev.js'),
            this.destinationPath('webpack.dev.js'),
            this
        );
        this.fs.copy(
            this.templatePath('_webpack.prod.js'),
            this.destinationPath('webpack.prod.js'),
            this
        );
        switch (this.projectLicense) {
            case 'MIT':
                this.fs.copy(
                    this.templatePath('LICENSE_MIT'),
                    this.destinationPath('LICENSE'),
                    this
                );
                break;
            case 'Apache-2.0':
                this.fs.copy(
                    this.templatePath('LICENSE_APACHE'),
                    this.destinationPath('LICENSE'),
                    this
                );
                break;
            case 'GPL-3.0':
                this.fs.copy(
                    this.templatePath('LICENSE_GPL'),
                    this.destinationPath('LICENSE'),
                    this
                );
                break;
            case 'Others':
                this.fs.write(this.destinationPath('LICENSE'), '')
                break;
            default:
                this.fs.copy(
                    this.templatePath('LICENSE_MIT'),
                    this.destinationPath('LICENSE'),
                    this
                );
        }

    }
    install() { //安装依赖
        this.installDependencies({ bower: false });
    }
};