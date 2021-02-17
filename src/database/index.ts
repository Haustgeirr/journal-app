import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL ?? '';

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to db.');
  })
  .catch(() => {
    console.log('Connection failed');
    console.log(`db: ${MONGO_URL}`);
  });
