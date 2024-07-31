import express from 'express';
import * as diaryServices from '../services/diaryServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(req.params.id);

  //res.send(diary);

  //return diary
  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.get('/nside/:id', (req, res) => {
  const diary = diaryServices.findByIdNside(req.params.id);

  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { date, airline, flightNumber, seat } = req.body;

  const newDiaryEntry = diaryServices.addEntry(
    date,
    airline,
    flightNumber,
    seat
  );

  res.json(newDiaryEntry);
})

export default router;
