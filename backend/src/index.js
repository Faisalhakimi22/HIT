const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Authentication routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Mount feature modules
const bazaarModule = require('./modules/bazaar');
app.use('/api/bazaar', bazaarModule);
const walletModule = require('./modules/wallet');
app.use('/api/wallet', walletModule);
const freightModule = require('./modules/freight');
app.use('/api/freight', freightModule);
const globalModule = require('./modules/global');
app.use('/api/global', globalModule);

const errorHandler = require('./middleware/errorMiddleware');
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hit_platform')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to HIT Platform API' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 