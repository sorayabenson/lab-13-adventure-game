export function renderStats(userData) {
   
    const h6 = document.createElement('h6');
    h6.classList.add('user-stats');
    h6.textContent = `Light: ${userData.light}, Friendly Ghosts: ${userData.friendlyGhosts}`;
    
    return h6;
}