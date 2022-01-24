import express from 'express';
import bodyparser from 'body-parser';

const router = express();

let cors = require('cors');
let sender = require('../controllers/sendEmailController');

router.use(cors());
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended:true}));

router.post('/api/sendemail', sender.sendEmailController);

export {router as sendEmail}