const userStats = document.getElementById('user-stats');

export function renderStats() {

    let currentStats = getUserData();
    
    const h6 = document.createElement('h6');
    h6.classList.add('user-stats');
    h6.textContent = `Light: ${currentStats.light}, Friendly Ghosts: ${currentStats.friendlyGhosts}`;
    
    return h6;
}