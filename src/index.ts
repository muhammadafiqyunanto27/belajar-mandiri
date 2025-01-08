import * as readline from 'readline'

interface Greeting {
    message: string;
    greet(name: string): string;
}

class HelloWorld implements Greeting {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    greet(name: string): string {
        return `${this.message}, ${name}!`;
    }

}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama Anda: ", (name) => {
    const greeter = new HelloWorld("Halo");
    console.log(greeter.greet(name));
    rl.close();
});