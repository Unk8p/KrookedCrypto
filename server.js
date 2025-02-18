
// Sample Code for Crypto Tracking Website (Simplified Version)
// This is a basic implementation; full project will include styling, API integration, etc.

const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Fetch Crypto Prices from CoinGecko API
app.get('/api/prices', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch prices' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
