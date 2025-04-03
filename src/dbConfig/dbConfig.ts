import mongoose from 'mongoose';

export async function connect() {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoUri);

    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('✅ MongoDB connected successfully');
    });

    connection.on('error', (err) => {
      console.error(' MongoDB connection error. Please ensure MongoDB is running:', err);
      process.exit(1);
    });

  } catch (error) {
    console.error(' MongoDB connection failed:', error);
    process.exit(1);
  }
}
