"use strict";
// Create a class to manage home-related logic
class Home {
    constructor() {
        this.users = [];
    }
    // Add a user to the list
    addUser(user) {
        this.users.push(user);
        console.log(`User added: ${user.name}`);
    }
    // Get all users
    getUsers() {
        return this.users;
    }
    // Find a user by ID
    findUserById(id) {
        return this.users.find(user => user.id === id);
    }
}
// Example usage
const home = new Home();
home.addUser({ id: 1, name: "John Doe", email: "john.doe@example.com" });
home.addUser({ id: 2, name: "Jane Smith", email: "jane.smith@example.com" });
console.log("All users:", home.getUsers());
console.log("Find user with ID 1:", home.findUserById(1));
