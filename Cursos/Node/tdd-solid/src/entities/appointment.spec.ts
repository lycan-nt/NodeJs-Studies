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
})