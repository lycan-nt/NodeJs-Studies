abstract class Person {
    protected abstract score: number;

    constructor(
        protected name: string
    ){}

    public abstract calcScore(): number;

    public setScore(score: number): void {
        if (score < 0 || score > 2000) {
            throw new Error('Score invalid');
        }
        this.score = score;
    }
}

class Student extends Person {
    protected score: number;

    constructor(name: string, score: number = 0) {
        super(name);
        this.score = score;
    }

    public calcScore(): number {
        return 200;
    }
}

class Teacher extends Person {
    protected score: number;

    constructor(name: string, score: number = 1300) {
        super(name);
        this.score = score;
    }

    public calcScore(): number {
        return this.score + 100;
    }

}

const studentFelipe = new Student('Felipe', 800);
const teacherMarcella = new Teacher('Marcella', 1600);
// const generic = new Person();