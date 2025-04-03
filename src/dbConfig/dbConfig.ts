import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI as any);

    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (err) => {
      console.log('MongoDB connection error. Please make sure MongoDB is running. ' + (err as Error));
      process.exit();
    });

  } catch (error) {
    console.log('MongoDB connection failed: ', (error as Error));
    process.exit(1);
  }
}
