const person = {
    name: "Mayank",

    greet(){
        console.log(`Hi, I am ${this.name}`)
    }
}

person.greet()

const greetFunc = person.greet;
greetFunc()

const boundGreet = person.greet.bind({ name: "sayant"})
boundGreet()