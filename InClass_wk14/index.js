const chalk = require('chalk');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})



readline.question(`Please enter your name: `, (name) => {
    console.log(name);
    console.log(chalk.blue('Hello ') + name + chalk.red('!'));
    readline.close();
})

