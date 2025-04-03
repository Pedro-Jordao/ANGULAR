// Define an interface for a user
interface User {
    id: number;
    name: string;
    email: string;
}

// Create a class to manage home-related logic
class Home {
    private users: User[] = [];

    // Add a user to the list
    addUser(user: User): void {
        this.users.push(user);
        console.log(`User added: ${user.name}`);
    }

    // Get all users
    getUsers(): User[] {
        return this.users;
    }

    // Find a user by ID
    findUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
}

// Example usage
const home = new Home();
home.addUser({ id: 1, name: "John Doe", email: "john.doe@example.com" });
home.addUser({ id: 2, name: "Jane Smith", email: "jane.smith@example.com" });

console.log("All users:", home.getUsers());
console.log("Find user with ID 1:", home.findUserById(1));