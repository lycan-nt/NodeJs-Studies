class Address2 {
    constructor(
        public address: string,
        public zipCode: string,
        public number?: number
    ) {}
}

class User3 {
    name: string;
    email: string;
    address: Address2[] = [];
    active: boolean;

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
    }

    getAddress(): Address2[] {
        return this.address;
    }

    setAddress(address: Address2): void {
        this.address.push(address);
    }
}


const address1 = new Address2('Av. Code', '123', 10);
const address2 = new Address2('Av. Teste', '456', 100);

const userFelipe = new User3('Felipe', 'lycan.felipe@gmail.com', true);
console.log(userFelipe);
userFelipe.setAddress(address1);
userFelipe.setAddress(address2);
console.log(userFelipe);

