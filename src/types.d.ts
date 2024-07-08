export type AirlineName = "EVA Air" | "Linea Aerea Amaszonas" | "Thai Airways"
  | "Singapore Airlines" | "Air Transat" | "TUI Airways" | "Star Peru"
  | "Ukraine International" |"Turkish Airlines"

export interface DiaryEntry {
  "id": string,
  "date": string,
  "airline": AirlineName,
  "flightNumber": number,
  "seat": string
}

// las interfaces estan pensadas para extenderse
// las interfaces no se sobreescriben, extienden si se declaran mas de 1 vez
export interface SpecialDiaryEntry extends DiaryEntry {
  "comment": string
}

// con los type también se puede hacer lo mismo, pero estos crean otro type distinto
// los type si se sobreescriben o pueden lanzar error si se declaran mas de 1 vez
export type SpecialDiaryEntry2 = DiaryEntry & {
  "comment": string
}

// Tipo de Utilidad
// Pick<>
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "airline" | "date">

// Omit<>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "flightNumber" | "seat">
