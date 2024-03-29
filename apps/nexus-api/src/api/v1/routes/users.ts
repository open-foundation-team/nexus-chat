// Module imports
import HyperExpress from 'hyper-express';

// Controller and validator imports


// User router declaration
const router = new HyperExpress.Router();


// Define user routes

// user-test endpoint
router.get('/test', async (req, res) => {
    res.status(200).json({
        statusCode: 200,
        data: {
            name: 'Christian',
            surname: 'Smith Mantas',
            dob: '12/05/1998'
        }
    });
});

// Export user router
export default router;