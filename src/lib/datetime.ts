import { type Time } from '@internationalized/date';

export function padWithZeroes(number: number) {
    return number.toString().padStart(2, '0');
}

export function formatSecondsHHMMSS(timeInSeconds: number) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds - 3600 * hours) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return (hours > 0 ? `${padWithZeroes(hours)}:` : "") + `${padWithZeroes(minutes)}:${padWithZeroes(seconds)}`;
}

export function formatSecondsMS(timeInSeconds: number) {
    const tenths = Math.floor((timeInSeconds % 1) * 10) % 10;
    return `.${tenths}`;
}

export function formatDateHHMMSS(time: Date) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${padWithZeroes(hours)}:${padWithZeroes(minutes)}:${padWithZeroes(seconds)}`;
}

export function formatDateYYMMDD(time: Date) {
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    return `${year}-${padWithZeroes(month)}-${padWithZeroes(day)}`;
}

export function formatTimeHHMMSS(time: Time) {
    return formatSecondsHHMMSS(time.hour * 3600 + time.minute * 60 + time.second);
}
