import express from 'express';
import { handleNumberRequest } from '../controllers/NumberController.js';

const router = express.Router();

router.get('/:numberId', async (req, res) => {
    const { numberId } = req.params;

    try {
        const responseData = await handleNumberRequest(numberId);
        res.json(responseData);
    } catch (error) {
        console.error('Route error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
