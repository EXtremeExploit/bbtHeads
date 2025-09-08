import { assert } from 'chai';
import { createHash } from 'crypto';
import { readdirSync, readFileSync } from 'fs';

import { ITEMS } from '../src/util/constants';

describe('Item list tests', () => {
    it(`There shouldnt be duplicate names`, () => {
        const exceptions = [
            'Walter' // For some reason there are 2 walters lol
        ];

        const names = Object.values(ITEMS).map((c) => c.name).filter((c) => !exceptions.includes(c));
        const dupedNames = names.filter((item, index) => names.indexOf(item) !== index);
        assert(dupedNames.length == 0, `Item with duped names: ${dupedNames.map((n) => `"${n}" `)}`);
    });

    it(`There shouldnt be duplicate ids`, () => {
        const ids = Object.values(ITEMS).map((c) => c.id);
        const dupedIds = ids.filter((item, index) => ids.indexOf(item) !== index);
        assert(dupedIds.length == 0, `Item with dupe ids: ${dupedIds.map((n) => `"${n}" `)}`);
    });

    it('All items should have a valid id', () => {
        Object.values(ITEMS).forEach((c) => {
            assert(c.id != '');
            assert(c.id != '0');
            assert(c.id != 'x');
            assert(c.id != null);
            assert(c.id != undefined);
            assert(typeof c.id == 'string');
            assert(BigInt(c.id).toString() === c.id);
        });
    });

    it('All items should have a valid name', () => {
        Object.values(ITEMS).forEach((c) => {
            assert(c.name != '');
            assert(c.name != null);
            assert(c.name != undefined);
            assert(typeof c.id == 'string');
        });
    });
});

function getFiles(source) {
    return readdirSync(source, { withFileTypes: true, recursive: true })
        .filter((dirent) => !dirent.isDirectory())
        .map((dirent) => `${dirent.parentPath}/${dirent.name}`);
}

describe('Filesystem tests', () => {
    const files = getFiles('./public/');

    it('There shouldnt be any duplicate image hashes', () => {
        const hashes: { path: string, hash: string }[] = [];
        files.forEach((file) => {
            const blob = readFileSync(file);
            const sha1 = createHash('sha1').update(blob).digest('hex');

            const foundHash = hashes.find((h) => h.hash === sha1);

            if (typeof foundHash != 'undefined') {
                assert(false, `Duplicate SHA1: ${sha1} for item paths "${file}" and "${foundHash.path}"`);
            }

            if (typeof foundHash == 'undefined')
                hashes.push({ path: file, hash: sha1 });
        });
    });
});
