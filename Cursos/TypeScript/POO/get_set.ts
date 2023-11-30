export class Address {
    private _address: string = '';
    private _zipCode: string = '';
    private _number: number = 0;

    public get address(): string {
        return this._address;
    }

    public set address(address: string) {
        if (address.length < 3) {
            throw new Error('Endereço Invalido.');
        }
        this._address = address;
    }

    public set zipCode(zipCode: string) {
        this._zipCode = zipCode;
    }

    public get zipCode(): string {
        return this._zipCode;
    }

    public set number(number: number) {
        this._number = number;
    }

    public get number(): number {
        return this._number;
    }
}

const address1 = new Address();
console.log(address1.address);
console.log(address1.zipCode);
address1.address = 'Av. Code';
address1.zipCode = '00998';
console.log(address1.address);
console.log(address1.zipCode);