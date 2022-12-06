import fs from 'fs';
import path from 'path';
import { PayloadHandler } from 'payload/config';

export const readPayloadVersion: PayloadHandler = (req, res, next) => {
  try {
    const data: any = fs.readFileSync(path.resolve(__dirname, '../../package.json'));
    const packageJson = JSON.parse(data);
    res.status(200).json({
      version: packageJson.dependencies.payload
    });
  } catch (err) {
    console.error(err)
    res.status(500).json({ version: undefined })
  }
}