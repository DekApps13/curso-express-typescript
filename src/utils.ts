import { NewDiaryEntry, AirlineName } from "./types";

const parseSeat = (seatFromRequest: any): string => {
  if (!isString(seatFromRequest)) {
    throw new Error("Incorrect or missing seat");
  }

  return seatFromRequest;
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }

  return dateFromRequest;
}

const parseAirlineName = (airlineFromRequest: any): AirlineName => {
  if (!isString(airlineFromRequest) || !isAirlineName(airlineFromRequest)) {
    throw new Error("Incorrect or missing Airline name");
  }

  return airlineFromRequest;
}

const parseFlightNumber = (flightNumberFromRequest: any): number => {
  if (!isNumber(flightNumberFromRequest)) {
    throw new Error("Incorrect or missing flight number");
  }

  return flightNumberFromRequest;
}

const isString = (string: any): boolean => {
  return typeof string === "string" || string instanceof String;
}

const isNumber = (number: any): boolean => {
  return typeof number === "number" || number instanceof Number;
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
}

const isAirlineName = (airline: any): boolean => {
  return Object.values(AirlineName).includes(airline);
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    airline: parseAirlineName(object.airline),
    flightNumber: parseFlightNumber(object.flightNumber),
    seat: parseSeat(object.seat)
  }
  // ...Work

  return newEntry;
}

export default toNewDiaryEntry;
