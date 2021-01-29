export function friendlyGhostScore(friendlyGhosts) {
    if (friendlyGhosts <= 0) {
        return 'low';
    }
    if (friendlyGhosts < 10) {
        return 'medium';
    }
    return 'high';
}