export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <p>&copy; 2025 Todo App. All rights reserved.</p>
  `;
  return footer;
}
