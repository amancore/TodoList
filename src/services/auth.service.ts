// This file provides stubbed authentication functions.
// In a real-world scenario, these functions would make HTTP requests to your backend API.
export async function login(username: string, password: string) {
  // simulate an API call with a delay
  return new Promise((resolve) => setTimeout(() => resolve({ username }), 500));
}

export async function register(username: string, password: string) {
  // simulate an API call with a delay
  return new Promise((resolve) =>
    setTimeout(() => resolve({ username, id: Date.now() }), 500)
  );
}

export async function logout() {
  // simulate an API call with a delay
  return new Promise((resolve) => setTimeout(() => resolve(true), 500));
}