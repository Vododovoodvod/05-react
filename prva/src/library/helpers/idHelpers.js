import { nanoid } from "nanoid";

export function generateID() {
    return nanoid();
};

const module = {
    generateID,
};

export default module;