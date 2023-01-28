import { Router } from 'express';
import { isAuthenticated } from '../../auth/auth.services';
import {
  handleAllGetUsers,
  handleCreateUser,
  handleDeleteUser,
  handleGetUser,
  handleUpdateUser
} from './user.controller';

const router = Router();

router.get('/', handleAllGetUsers);

router.get('/:id', handleGetUser);

router.post('/', handleCreateUser);

router.patch('/:id', isAuthenticated, handleUpdateUser);

router.delete ('/:id', isAuthenticated, handleDeleteUser);


export default router;
