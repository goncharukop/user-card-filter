export class ApiService {
    static async fetchUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            return await response.json();
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
}
