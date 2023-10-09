import express from "express";
import {add,alldata,login} from '../user.mjs';

const router = express.Router()
router.post('/register',add);
router.post('/login',login);
router.get('/alldata',alldata);

export default router;