import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const url = process.env.DB_URL;

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(`Error connecting to database: `, err);
    }
}

// async function addUsers(){
//     try {
//         // Using insertMany directly on the model with data
//         await userModel.insertMany([
//             { username: 'user1', room: '123' },
//             { username: 'user2', room: '123' },
//             { username: 'user3', room: '123' }
//         ]);
//         console.log('Users added successfully');
//     } catch (error) {
//         console.error('Error adding users:', error);
//     }
// }

// mongodb://localhost:27017