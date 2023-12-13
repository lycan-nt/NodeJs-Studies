import { expect, test } from 'vitest';
import { Appointment } from './appointment';

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
    const startsAt = new Date();
    const endsAt = new Date();

    endsAt.setDate(endsAt.getDate() -1);

    expect(() => {
        return new Appointment({
            customer: 'Felipe',
            startsAt,
            endsAt
        });
    }).toThrow();
});