// Module imports
import HyperExpress from 'hyper-express';

// Router imports
import UserRouter from './users';

// Declare global router
const router = new HyperExpress.Router();

router.use('/users', UserRouter);

export = {
    router: router,
    version: '1.0'
};