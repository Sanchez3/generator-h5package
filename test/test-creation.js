/*yeoman-test*/
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const fs = require('fs');
const fsextra = require('fs-extra');
const path = require('path');

const basedir = path.join(__dirname, '../generators/app');

describe('yo phaser-h5', () => {

    let tmpdir;

    beforeEach(() => {
        return helpers.run(basedir)
            .inTmpDir(dir => {
                tmpdir = dir;
            })
            .withOptions({ projectName: 'temp' }, { projectDesc: ' ' }, { projectLicense: 'MIT' });
    });

    afterEach(() => fsextra.remove(tmpdir));

    it('creates expected files', () => {

        const expected = [
            'webpack.common.js',
            'webpack.prod.js',
            'webpack.dev.js',
            'src/assets/css/css.css',
            'src/assets/img/favicon.ico',
            'src/assets/img/favicon.png',
            'src/assets/css/sass.scss',
            'src/index.html',
            'package.json',
            'src/assets/js/main.js',
            'src/assets/js/entities/Bar1.js',
            'src/assets/js/entities/Bar2.js',
        ];

        const files = expected.map(i => path.join(tmpdir, i));
        assert.file(files);
    });
});