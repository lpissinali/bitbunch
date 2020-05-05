
// Formats number without scientific notation
export function formatNumber(input, maxExponent) {
    const sign = Math.sign(input);
    const positive = input * sign;
    const str = positive.toString();
    if (str.indexOf('e') !== -1) {
        let exponent = parseInt(str.split('-')[1], 10);
        if (maxExponent !== undefined) {
            exponent = Math.min(maxExponent, exponent);
        }
        const result = positive.toFixed(exponent);
        return `${sign < 0 ? '-' : ''}${result}`;
    } else {
        if (maxExponent !== undefined) {
            return (input.toFixed(maxExponent) * 1).toString();
        }
        return input.toString();
    }
}

export function formatCurrency(value, currency) {
    return formatNumber(value, 8);
}

export function formatTime(time) {
    return new Date(time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

export function formatDuration(duration) {
    let seconds = Math.floor(duration / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    return `${minutes < 10 ? '0': ''}${minutes}:${seconds < 10 ? '0':''}${seconds}`;
}
