// Utility functions for localStorage operations
export const StorageUtil = {
    getItem(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return null;
        }
    },

    setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error writing to localStorage:', error);
            return false;
        }
    },

    removeItem(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing from localStorage:', error);
            return false;
        }
    }
};