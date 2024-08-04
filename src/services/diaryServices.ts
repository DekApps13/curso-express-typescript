import { AirlineName, DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
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

export const addEntry = (
  date: string,
  airline: AirlineName,
  flightNumber: number,
  seat: string
): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    date,
    airline,
    flightNumber,
    seat
  }

  diaries.push(newDiaryEntry);

  return newDiaryEntry;
};
