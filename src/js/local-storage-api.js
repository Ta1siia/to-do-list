export function saveInLs(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

export const TASKS_LS_KEY = 'tasks';

export function getFromLs(key) {
    const savedData = localStorage.getItem(key);
    if (!savedData) {
        return null;
    };
    return JSON.parse(savedData);
 };