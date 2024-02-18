import mongoose from 'mongoose';
import User from './models/User.js';

const userArray=[
    {
        uname:"Saksham",
        username:"saksham_3",
        password:"12345"
    },
    {
        uname:"Divyansh",
        username:"divyansh_8",
        password:"54321"
    }
]

async function seedDB(){
    await User.deleteMany({});
    await User.insertMany(userArray);
    console.log("data seeded successfully");
}

export default seedDB;