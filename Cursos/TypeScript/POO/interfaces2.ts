type DefaultResponse = {
    id: (string|number), 
    name: string, 
    createdAt: string
};
type ID = (string|number);
type InputDto = {data: string, active: boolean};

interface IRepositiry {
    readonly model: any;
    findAll(): DefaultResponse[];
    findById(id: ID): DefaultResponse;
    IntersectionObserverEntry(data: InputDto): DefaultResponse;
    update(id: ID, data: InputDto): DefaultResponse;
    destroy(id: ID): boolean;
}

class UserRepositoryMySQL implements IRepositiry {
    model: any;

    constructor(model: any) {
        this.model = model;
    }

    findAll(): DefaultResponse[] {
        throw new Error("Method not implemented.");
    }
    findById(id: ID): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    IntersectionObserverEntry(data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    update(id: ID, data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    destroy(id: ID): boolean {
        throw new Error("Method not implemented.");
    }
   
}

class UserRepositoryMongo implements IRepositiry {
    model: any;

    constructor(model: any) {
        this.model = model;
    }

    findAll(): DefaultResponse[] {
        throw new Error("Method not implemented.");
    }
    findById(id: ID): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    IntersectionObserverEntry(data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    update(id: ID, data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    destroy(id: ID): boolean {
        throw new Error("Method not implemented.");
    }
        
}

const getAllUser = (repository: IRepositiry): DefaultResponse[] => {
    return repository.findAll();
}

export {}