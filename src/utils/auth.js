export default function isAuthenticated() {
    // Check if the user is authenticated based on your application's logic
    // For instance, you might check if a token exists in local storage or cookies
    // Return true if authenticated, false otherwise
    return !!localStorage.getItem('authToken'); // Example using local storage
}

