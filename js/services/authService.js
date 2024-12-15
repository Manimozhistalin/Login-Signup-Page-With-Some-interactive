import { StorageUtil } from '../utils/storage.js';
import { ValidationUtil } from '../utils/validation.js';

export class AuthService {
    constructor() {
        this.users = StorageUtil.getItem('users') || [];
    }

    signup(name, email, password) {
        if (!ValidationUtil.isValidName(name)) {
            throw new Error('Invalid name format');
        }
        if (!ValidationUtil.isValidEmail(email)) {
            throw new Error('Invalid email format');
        }
        if (!ValidationUtil.isValidPassword(password)) {
            throw new Error('Password must be at least 6 characters');
        }

        const existingUser = this.users.find(user => user.email === email);
        if (existingUser) {
            throw new Error('Email already registered');
        }

        const newUser = { name, email, password };
        this.users.push(newUser);
        StorageUtil.setItem('users', this.users);
        return true;
    }

    login(email, password) {
        if (!ValidationUtil.isValidEmail(email)) {
            throw new Error('Invalid email format');
        }

        const user = this.users.find(u => u.email === email && u.password === password);
        if (!user) {
            throw new Error('Invalid email or password');
        }

        StorageUtil.setItem('currentUser', user);
        return user;
    }

    logout() {
        StorageUtil.removeItem('currentUser');
    }

    getCurrentUser() {
        return StorageUtil.getItem('currentUser');
    }
}