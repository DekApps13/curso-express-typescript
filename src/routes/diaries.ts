import express from 'express';
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

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
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
})

export default router;
