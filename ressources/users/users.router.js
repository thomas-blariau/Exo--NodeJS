import { Router } from 'express';
import { userList, createUser } from './users.controller';
const router = Router();

router
    .route('/')
    .get(userList)
    .post(createUser)


export default router;