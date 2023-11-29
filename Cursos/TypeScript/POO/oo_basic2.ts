class User2 {
    name: string;
    email: string;
    active: boolean;
    address: Address;

    constructor(name: string, email: string, active: boolean = false, address: Address) {
        this.name = name;
        this.email = email;
        this.active = active;
        this.address = address;
    }
}

class Address {
    constructor(
        public address: string,
        public zipCode: string,
        public number?: number,
    ) {

    }
}
const addressFelipe = new Address('Av. Code', '123-123', 10);
const user1 = new User2('Felipe', 'lycan.felipe@gmail.com', true, addressFelipe);
console.log(user1);
console.log('Endereço', user1.address);

const addressMarcella = addressFelipe;
const user2 = new User2('Marcella', 'email@email;.com', false, addressMarcella);
console.log(user2);