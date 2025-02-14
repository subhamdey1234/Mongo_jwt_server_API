import jwt from 'jsonwebtoken';

const secretKey = "Subham123456";

// generate token function
export const generateToken = (data, expireTime) => {
    return jwt.sign(data, secretKey, { expiresIn: expireTime })
}