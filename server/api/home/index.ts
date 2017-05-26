import * as express from "express";
import * as classrouter from "classrouter";

import * as test from "./test";




export const router = express.Router();

classrouter.attach(router,test.Route);