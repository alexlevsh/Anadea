import database from "../utils/database";

const saveData = (key) => {
    localStorage[key] = JSON.stringify(database[key]);
}

class storageManager {
    constructor() {
        Object.keys(database).forEach(key => {
            if (key in localStorage) {
                database[key] = JSON.parse(localStorage.getItem(key));
            } else {
                localStorage.setItem(key, JSON.stringify(database[key]));
            }
        });
    }

    getData(key) {
        return database[key];
    }

    addItem(key, data) {
        database[key].push(data);
        saveData(key);
    }

    updateItem(key, data) {
        const index = database[key].findIndex(item => item.id === data.id);
        database[key][index] = data;
        saveData(key);
    }

    deleteItem(key, data) {
        database[key].splice(database[key].indexOf(data), 1)[0];
        saveData(key);
    }
}


export default new storageManager;