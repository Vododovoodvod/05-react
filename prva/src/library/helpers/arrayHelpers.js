export function getRandomElement(array) {
    if (Array.isArray(array)) {
        let index = Math.floor(Math.random() * array.length);
        return array[index];
    } else {
        return undefined;
    }
};

const module = {
    getRandomElement,
};

export default module;