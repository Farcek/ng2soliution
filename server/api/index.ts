import * as express from "express";


import * as home from "./home/index"

export const router = express.Router();

router.use('/home', home.router);