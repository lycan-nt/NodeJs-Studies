import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-future-date";

describe('Create Appointment', () => {
    it('create an appointment', () => {
        const createAppointment = new CreateAppointment();
        const startsAt = getFutureDate('2023-10-10');
        const endsAt = getFutureDate('2023-10-11');

        expect(createAppointment.execute({
            customer: 'Felipe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment);
    });
});