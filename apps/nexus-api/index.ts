// Module imports
import HyperExpress from 'hyper-express';
import 'dotenv/config';

// Import custom routes
import router from './src/api/v1/routes/index';


// Declare hyper-express server
const app = new HyperExpress.Server();


// Declare middleware
app.use();

// Declare routing
app.use('/api/v1', router.router);

app.get('/', (req, res) => {
    res.json({
        statusCode: 200,
        body: 'Goodbye World'
    });
});

// Open server on port
app.listen(3000)
    .then((soc) => {
        console.log('Server started!');
        console.log(`Router version: v${router.version}`);
    })
    .catch((err) => console.log('Failed to start server on port 3000'));