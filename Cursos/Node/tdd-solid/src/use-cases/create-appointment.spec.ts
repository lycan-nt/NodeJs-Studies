import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";

describe('Create Appointment', () => {
    it('create an appointment', () => {
        const createAppointment = new CreateAppointment();

        expect(createAppointment.execute({
            customer: 'Felipe',
            startsAt: new Date(),
            endsAt: new Date()
        })).resolves.toBeInstanceOf(Appointment);
    });
});