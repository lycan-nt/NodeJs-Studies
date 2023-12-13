import { expect, it, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test('Increment date', () => {
    const year = new Date().getFullYear;
    expect(getFutureDate(`${year}-10-02`).getFullYear()).toEqual(2024);
});