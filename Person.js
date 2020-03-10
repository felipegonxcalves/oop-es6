class Person {
    constructor() {
        this.name = 'Felipe';
        this.age = 25;
        this.height = 1.84;
    }

    // sayHello() {
    //     console.log(`Olá ${this.name}, como está você ?`);
    // }

    static  sayHello(name){
        console.log(`Olá ${name}, tudo bem com você ??`);
    }
}

let felipe = new Person();
// felipe.sayHello();
Person.sayHello("Felipêta");