import assert from 'assert';
import {addJsExtCmd} from './addJsExtension.js';
import {jestToVitestCmd} from './jestToVitest.js';
import {ProcessCmdType, kProcessCmdType} from './types.js';

async function main() {
  const cmd = process.argv[2];
  const folderpath = process.argv[3];

  assert(
    cmd,
    'No cmd provided, expected one of "add-js-ext" | "jest-to-vitest"'
  );
  assert(folderpath, 'No folderpath provided');

  switch (cmd as ProcessCmdType) {
    case kProcessCmdType.addJsExt:
      await addJsExtCmd(folderpath);
      break;

    case kProcessCmdType.jestToVitest:
      await jestToVitestCmd(folderpath);
      break;
  }
}

main().catch(console.error.bind(console));