export function lightScore(light) {
    if (light <= 0) {
        return 'low';
    }
    if (light < 35) {
        return 'medium';
    }
    return 'high';
}