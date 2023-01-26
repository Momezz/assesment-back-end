import { Router } from 'express';
import {
  handleAllGetUsers,
  handleCreateUser,
  handleDeleteUser,
  handleGetUser,
  handleUpdateUser,
  handleLoginUser
} from './user.controller';

const router = Router();

router.get('/', handleAllGetUsers);

router.get('/:id', handleGetUser);

router.post('/', handleCreateUser);

router.patch('/:id', handleUpdateUser);

router.delete ('/:id', handleDeleteUser);

//login
//POST /api/users/login
router.post('/login', handleLoginUser);

export default router;
