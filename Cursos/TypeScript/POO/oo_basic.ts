class User{
    name: string;
    email: string;
    active: boolean;

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
    }
}

const felipe = new User('Felipe D. Santos', 'lycan.felipe@gmail.com', true);
console.log(felipe.name);
const marcella = new User('Marcella', 'email@email.com', false);
console.log(marcella.name);