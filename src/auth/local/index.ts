import { Router } from 'express';

import {
    handleLoginUser,
  } from "./local.controller";

const router = Router();

//Login
// auth/local/login
router.post("/login", handleLoginUser);
export default router;
