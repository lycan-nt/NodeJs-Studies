interface AppointmentProps {
    customer: string;
    startsAt: Date;
    endsAt: Date; 
}

export class Appointment {
    private props: AppointmentProps | undefined;

    constructor(props: AppointmentProps) {
        const { startsAt, endsAt } = props;

        if (startsAt < new Date()) {
            throw new Error("Invalid start date");
        }

        if(endsAt < startsAt) {
            throw new Error('Invali end date');
        }

        this.props = props;
    }

    get customer() {
        return this.props?.customer;
    }

    get startsAt() {
        return this.props?.startsAt;
    }

    get endsAt() {
        return this.props?.endsAt
    }
    
}