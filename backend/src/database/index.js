import { MongoClient } from 'mongodb';
import config from '../config';
const mongo = new MongoClient(config.mongodb_url);
export default mongo; 
