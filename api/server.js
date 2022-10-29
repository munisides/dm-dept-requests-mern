import path from 'path';
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './db/db.js';
const port = process.env.PORT || 3001;
import deptRequestRoutes from './routes/deptRequestRoutes.js';
import userRoutes from './routes/userRoutes.js';
import helmet from  'helmet';
import cors from 'cors';
import xss from 'xss-clean';
import rateLimiter from 'express-rate-limit';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
// app.use(urlencoded({ extended: false }));

// sec
app.use(helmet());
app.use(cors());
app.use(xss());
app.set('trust proxy', 1);

const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// routes
app.use('/api/deptRequestRoutes', deptRequestRoutes);
app.use('/api/users', userRoutes);

// Serve client
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../client/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
