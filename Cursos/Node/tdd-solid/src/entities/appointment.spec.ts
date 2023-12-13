import { expect, test } from 'vitest';
import { Appointment } from './appointment';
import { getFutureDate } from '../tests/utils/get-future-date';

test('Create an appointment', () => {
    const appointment = new Appointment({
        customer: 'Felipe',
        startsAt: new Date,
        endsAt: new Date
    });
    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual('Felipe');
});

test('cannot create an appointment with date start before now', () => {
    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() -1);

    expect(() => {
        return new Appointment({
            customer: 'Felipe',
            startsAt,
            endsAt
        });
    }).toThrow();
})

test('cannot create an appointment with date end before start date', () => {
    const startsAt = getFutureDate('2023-08-10');
    const endsAt = getFutureDate('2023-08-09');

    expect(() => {
        return new Appointment({
            customer: 'Felipe',
            startsAt,
            endsAt
        });
    }).toThrow();
});