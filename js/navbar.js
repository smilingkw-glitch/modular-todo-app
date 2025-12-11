export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="navbar-container">
      <h1>Todo App</h1>
      <ul class="nav-menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="signup.html">Signup</a></li>
        <li><a id="logout-btn" style="display:none; cursor:pointer;">Logout</a></li>
      </ul>
    </div>
  `;
  const logoutBtn = nav.querySelector('#logout-btn');
  const user = localStorage.getItem('currentUser');
  if (user) {
    logoutBtn.style.display = 'inline';
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html';
    });
  }
  return nav;
}
