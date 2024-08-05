import express from 'express';
import * as diaryServices from '../services/diaryServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
})

router.get('/:id', (req, res) => {
  let idNumber: number = Number.parseInt(req.params.id);
  const diary = diaryServices.findById(idNumber);

  //res.send(diary);

  //return diary;

  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.get('/nside/:id', (req, res) => {
  let idNumber: number = Number.parseInt(req.params.id);
  const diary = diaryServices.findByIdNside(idNumber);

  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { date, airline, flightNumber, seat } = req.body;

  const newDiaryEntry = diaryServices.addDiary(
    {
      date,
      airline,
      flightNumber,
      seat
    }
  );

  res.json(newDiaryEntry);
})

export default router;
