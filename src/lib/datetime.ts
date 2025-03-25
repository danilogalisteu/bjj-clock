
export function padWithZeroes(number: number) {
    return number.toString().padStart(2, '0');
}

export function formatTimeMMSS(timeInSeconds: number) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${padWithZeroes(minutes)}:${padWithZeroes(seconds)}`;
}

export function formatTimeMS(timeInSeconds: number) {
    const seconds = Math.floor(timeInSeconds % 60);
    const tenths = Math.floor((timeInSeconds - seconds) * 10) % 10;
    return `.${tenths}`;
}

export function formatTimeHHMMSS(time: Date) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${padWithZeroes(hours)}:${padWithZeroes(minutes)}:${padWithZeroes(seconds)}`;
}

export function formatTimeYYMMDD(time: Date) {
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    return `${year}-${padWithZeroes(month)}-${padWithZeroes(day)}`;
}
