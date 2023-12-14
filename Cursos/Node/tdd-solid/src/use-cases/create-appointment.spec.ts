import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-future-date";
import { InMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointment-repository";

describe('Create Appointment', () => {
    it('create an appointment', () => {
        const appointmentRepository = new InMemoryAppointmentRepository;
        const createAppointment = new CreateAppointment(appointmentRepository);
        const startsAt = getFutureDate('2023-10-10');
        const endsAt = getFutureDate('2023-10-11');

        expect(createAppointment.execute({
            customer: 'Felipe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment);
    });

    it('overlapping dates', async () => {
        const startsAt = getFutureDate('2023-10-10');
        const endsAt = getFutureDate('2022-10-15');

        const appointmentRepository = new InMemoryAppointmentRepository();
        const createAppointment = new CreateAppointment(appointmentRepository);

        await createAppointment.execute({
            customer: 'Felipe',
            startsAt,
            endsAt
        });

        expect(createAppointment.execute({
            customer: 'Felipe',
            startsAt: getFutureDate('2023-10-12'),
            endsAt: getFutureDate('2023-10-18')
        })).rejects.toBeInstanceOf(Error);

        expect(createAppointment.execute({
            customer: 'Felipe',
            startsAt: getFutureDate('2023-10-01'),
            endsAt: getFutureDate('2023-10-18')
        })).rejects.toBeInstanceOf(Error);

        expect(createAppointment.execute({
            customer: 'Felipe',
            startsAt: getFutureDate('2023-10-01'),
            endsAt: getFutureDate('2023-10-22')
        })).rejects.toBeInstanceOf(Error);
    });
});