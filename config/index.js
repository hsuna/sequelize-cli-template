import db from './db';

const NODE_ENV = process.env.NODE_ENV || 'development';
const HOST = require('./host')[NODE_ENV];
const DATABASE = require('./db')[NODE_ENV];

console.log(`NODE_ENV::${NODE_ENV}`);

export {
  NODE_ENV,
  HOST,
  DATABASE
};