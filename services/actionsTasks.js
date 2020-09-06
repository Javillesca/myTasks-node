/*
* Require
*/
const fs = require('fs');

let tasksList = [];

const saveToDB = () => {

    let data = JSON.stringify(tasksList);

    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('Error al guardar datos', err);
    });

};

const loadDB = () => {

    try {  
        tasksList = require('../db/data.json');
    } catch(err) {
        tasksList = [];
    }

};


const createTask = (desc) => {

    let task = {
        desc,
        status: false
    };

    loadDB();

    tasksList.push(task);
    saveToDB();

    return task;

};

const getTaskList = () => {

    loadDB();
    return tasksList;

}

const updateTask = (desc, status) => {

    loadDB();
    let iTask = tasksList.findIndex(task => task.desc === desc);

    if(iTask >= 0) {
        tasksList[iTask].status = status;
        saveToDB();
        return true;
    } else {
        return false;
    }

};

const deleteTask = (desc) => {

    loadDB();
    let newList = tasksList.filter(task => task.desc !== desc);

    if(newList.length === tasksList.length) {
        return false;
    } else {
        tasksList = newList;
        saveToDB();
        return true;
    }

};

module.exports = {
    createTask,
    getTaskList,
    updateTask,
    deleteTask
};