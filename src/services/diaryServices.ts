import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diariesData from './diaries.json';

const diaries: Array<DiaryEntry> = diariesData as Array<DiaryEntry>;

export const getEntries = (): Array<DiaryEntry> => diaries;

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

export const findById = (id: string): DiaryEntry | undefined => {
  return diaries.find((d) => d.id === id);
}

export const addEntry = (): undefined => undefined;
