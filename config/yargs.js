const desc = {
        demand: true,
        alias: 'd',
        desc: 'Task description'
};

const status = {
        alias: 's',
        default: false,
        desc: 'Task status'
};

const argv = require('yargs')
    .command('create', 'Generate a task to perform', { desc })
    .command('show', 'Show tasks list')
    .command('update', 'Update task status', { desc, status })
    .command('delete', 'Delete task', { desc })
    .help()
    .argv;

module.exports = { argv };