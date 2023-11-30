export class User {
    private name: string;
    email: string;
    address: Address[] = [];
    active: boolean;

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        if (name.length <= 3) {
            throw new Error('Nome invalido');
        }
        this.name = name;
    }

    public setAddress(address: Address): void {
        this.address.push(address);
    }

}

const user = new User('Felipe', 'email@gmail.com');
console.log(user.getName());
user.setName("Mah");
console.log(user.getName());