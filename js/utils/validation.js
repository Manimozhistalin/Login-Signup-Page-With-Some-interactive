// Validation utility functions
export const ValidationUtil = {
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    isValidPassword(password) {
        return password.length >= 6;
    },

    isValidName(name) {
        return name.trim().length >= 2;
    }
};