import { Appointment } from "../../entities/appointment";
import { AppointmentRepository } from "../appointment-repository";
import { areIntervalsOverlapping } from "date-fns";

export class InMemoryAppointmentRepository implements AppointmentRepository {

    public items: Appointment[] = [];

    async create(appointment: Appointment): Promise<void> {
        this.items.push(appointment);
    }

    async findOverLappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
       const overLappingAppointment = this.items.find(appointment => {
        return areIntervalsOverlapping(
            { start: startsAt, end: endsAt },
            { start: appointment.startsAt, end: appointment.endsAt},
            { inclusive: true }
        )
       })

       if (!overLappingAppointment) {
        return null;
       }

       return overLappingAppointment;
    }

}