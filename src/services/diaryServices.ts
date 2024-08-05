import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diariesData from './diaries.json';

// Array forma Array<T>
const diaries: Array<DiaryEntry> = diariesData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

// usando forma corta de Array
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, airline, date }) => {
    return {
      id,
      airline,
      date
    }
  });
};

export const findById = (id: number): DiaryEntry | undefined => {
  return diaries.find((d) => d.id === id);
}

export const findByIdNside = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  if (entry) {
    const { flightNumber, seat, ...restOfDiary } = entry;
    return restOfDiary;
  }

  return undefined;
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary);

  return newDiary;
};
