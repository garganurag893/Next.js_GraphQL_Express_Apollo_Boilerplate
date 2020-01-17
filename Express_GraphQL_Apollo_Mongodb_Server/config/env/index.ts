import * as path from 'path';

const env: string = process.env.NODE_ENV || 'development';
//@ts-ignore
import config from `./${env}`;

const defaults = {
  root: path.join(__dirname, '/..'),
};

export default Object.assign(defaults, config);
