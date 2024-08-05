export enum AirlineName {
  EVA_Air = "EVA Air",
  Linea_Aerea_Amaszonas = "Linea Aerea Amaszonas",
  Thai_Airways = "Thai Airways",
  Singapore_Airlines = "Singapore Airlines",
  Air_Transat = "Air Transat",
  TUI_Airways = "TUI Airways",
  Star_Peru = "Star Peru",
  Ukraine_International = "Ukraine International",
  Turkish_Airlines = "Turkish Airlines"
}

export type DiaryEntry = {
  "id": number;
  "date": string;
  "airline": AirlineName;
  "flightNumber": number;
  "seat": string;
}

// las interfaces estan pensadas para extenderse
// las interfaces no se sobreescriben, extienden si se declaran mas de 1 vez
export interface SpecialDiaryEntry extends DiaryEntry {
  "comment": string;
}

// con los type también se puede hacer lo mismo, pero estos crean otro type distinto
// los type si se sobreescriben o pueden lanzar error si se declaran mas de 1 vez
export type SpecialDiaryEntry2 = DiaryEntry & {
  "comment": string;
}

// Tipo de Utilidad
// Pick<>
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "airline" | "date">

// Omit<>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "flightNumber" | "seat">

export type NewDiaryEntry = Omit<DiaryEntry, "id">
