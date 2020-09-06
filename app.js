/*
* Requires
*/
const argv = require('./config/yargs').argv;
const colors = require('colors');

const actTasks = require('./services/actionsTasks');


let command = argv._[0];

switch(command) {
    case 'create':

        let task = actTasks.createTask(argv.desc);
        console.log(task);
        break;

    case 'show':
        let taskList = actTasks.getTaskList();

        console.log('============Tasks============'.blue);
        taskList.forEach(element => {
            console.log(`Task: ${ element.desc}`);
            console.log(`Status: ${ element.status }`);
            console.log('______________________________'.blue);
        });
        break;

    case 'update':

        let taskUpdate = actTasks.updateTask(argv.desc, argv.s);

        if(taskUpdate) {
            if(argv.status == 'true') {
                console.log(`The task '${argv.desc}' has been completed.`.blue);
            } else {
                console.log(`The task '${argv.desc}' is pending.`.yellow);
            }
        } else {
            console.log('No ha podido localizarse la tarea');
        }

        break;
    
    case 'delete':
    
        let taskDelete = actTasks.deleteTask(argv.desc);
    
        if(taskDelete == true) {
            console.log(`The task ${argv.desc} has been deleted.`);
        } else {
            console.log(`error deleting task ${argv.desc}.`);
        }
        break;

    default:
        console.log('Invalid command');
        break;
}