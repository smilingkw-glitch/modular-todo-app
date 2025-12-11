export function signup(email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[email]) {
    return { success: false, message: 'User already exists' };
  }
  users[email] = { email, password };
  localStorage.setItem('users', JSON.stringify(users));
  return { success: true, message: 'Signup successful' };
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (!users[email] || users[email].password !== password) {
    return { success: false, message: 'Invalid credentials' };
  }
  localStorage.setItem('currentUser', email);
  return { success: true, message: 'Login successful' };
}

export function isLoggedIn() {
  return localStorage.getItem('currentUser') !== null;
}
