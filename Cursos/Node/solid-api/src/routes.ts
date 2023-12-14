import { Router } from "express";

const router = Router();

router.post('/users', (request, respose) => {
    return respose.status(201).send();
});

export { router };