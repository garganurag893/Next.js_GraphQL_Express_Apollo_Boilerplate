/**
 * Config file
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import dotenv from 'dotenv';
dotenv.config();
export default {
    db: process.env.DB,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    allowedOrigins: ['http://localhost:3000', 'http://yourapp.com', 'http://localhost:4020']
};
