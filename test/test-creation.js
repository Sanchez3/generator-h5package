/*yeoman-test*/
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const fs = require('fs');
const fsextra = require('fs-extra');
const path = require('path');

const basedir = path.join(__dirname, '../generators/app');
const name = 'test projectName';
const description = 'test projectDesc';

describe('yo:h5package', () => {
    describe('defaults', () => {
        it('creates expected files', () => {
            helpers.run(basedir)
                .then(checkAssets)
                .then(checkConfig)
                .then(checkScripts)
        });

        function checkConfig() {
            assert.file([
                'webpack.common.js',
                'webpack.dev.js',
                'webpack.prod.js',
                'package.json',
            ]);
        }

        function checkScripts() {
            assert.file([
                'src/assets/js/main.js',
                'src/assets/js/entities/Bar1.js',
                'src/assets/js/entities/Bar2.js'
            ]);
        }

        function checkAssets() {
            assert.file([
                'src/index.html',
                'README.md',
                'LICENSE',
                'src/assets/css/css.css',
                'src/assets/css/sass.scss',
                'src/assets/img/favicon.ico'
            ]);
        }
    });
    describe('using options', () => {
        it('projectName, projectDesc', done => {
            helpers.run(basedir)
                .withPrompts({ projectName: name, projectDesc: description })
                .on('end', () => {
                    assert.fileContent([
                        ['package.json', `"name": ${JSON.stringify(name)}`],
                        ['package.json', `"description": ${JSON.stringify(description)}`]
                    ]);
                    assert.fileContent([
                        ['README.md', `# ${name}`],
                        ['README.md', `${description}`]
                    ]);
                    done();
                });
        });
        it('projectLicense: MIT', done => {
            helpers.run(basedir)
                .withPrompts({ projectLicense: 'MIT' })
                .on('end', () => {
                    assert.file([
                        'LICENSE'
                    ]);
                    done();
                });
        });
        it('projectLicense: Apache-2.0', done => {
            helpers.run(basedir)
                .withPrompts({ projectLicense: 'Apache-2.0' })
                .on('end', () => {
                    assert.file([
                        'LICENSE'
                    ]);
                    done();
                });
        });
        it('projectLicense: GPL-3.0', done => {
            helpers.run(basedir)
                .withPrompts({ projectLicense: 'GPL-3.0' })
                .on('end', () => {
                    assert.file([
                        'LICENSE'
                    ]);
                    done();
                });
        });
        it('projectLicense: Others', done => {
            helpers.run(basedir)
                .withPrompts({ projectLicense: 'Others' })
                .on('end', () => {
                    assert.file([
                        'LICENSE'
                    ]);
                    done();
                });
        });
    });
});