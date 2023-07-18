import fs from 'fs';
import path from 'path';
import * as lockfile from '@yarnpkg/lockfile';
import { PayloadHandler } from 'payload/config';
import { Forbidden } from 'payload/errors';

export const readPayloadVersion: PayloadHandler = (req, res, next) => {
  if (!req.user) throw new Forbidden

  try {
    let file = fs.readFileSync(path.resolve(__dirname, '../../yarn.lock'), 'utf8');
    let { object } = lockfile.parse(file);

    let version = '';
    for (const key in object) {
      if (key.startsWith('payload@')) {
        version = object[key].version;
      }
    }

    res.status(200).json({
      version: version
    });
  } catch (err) {
    console.error(err)
    res.status(500).json({ version: undefined })
  }
}