export class User {
    protected name: string;
    private email: string;
    private address: Address[] = [];
    private active: boolean;

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getAddress(): Address[] {
        return this.address;
    }

    public setAddress(address: Address): void {
        this.address.push(address);
    }

    public getActive(): boolean {
        return this.active;
    }

    public setActive(active: boolean): void {
        this.active = active;
    }

    public getNumber(): number {
        return 123;
    }
}

class Manager extends User {
    public getName(): string {
        return `Manager: ${this.name}`;
    }

    public getNumber(): number {
        return 456;
    }
}

class Admin extends User {
    public getName(): string {
        return `Admin: ${this.name}`;
    }

    public getNumber(): number {
        return 567;
    }
}

const manager = new Manager('Felipe', 'lycan.felipe@gmail.com', true);
console.log(manager.getName());

const admin = new Admin('Marcella', 'email@email', true);
console.log(admin.getName());

