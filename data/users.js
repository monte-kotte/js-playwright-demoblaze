import { User } from './user.class.js';

export const user = new User(
    process.env.USER_NAME,
    process.env.USER_PASSWORD
);
