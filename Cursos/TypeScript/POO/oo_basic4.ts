class Address3 {
    constructor(
        public address: string,
        public readonly zipCode: string,
        public number?: number
    ) {}
}

const address = new Address3('code', '123', 10);
console.log(address.zipCode);
// address.zipCode = '4560';
// console.log(address.zipCode);

