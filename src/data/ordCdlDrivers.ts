import type { Driver, StaffMember } from "../types/dispatch";

export type CdlDriverShift = {
  employeeId: string;
  name: string;
  departmentId: string;
  date: string;
  shiftStart: string;
  shiftEnd: string;
  hours: number;
};

export const ordCdlDriverShifts: CdlDriverShift[] = [
  {
    "employeeId": "2113960",
    "name": "Barrock, Aaron L",
    "departmentId": "070708",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2075655",
    "name": "Benakrouf, Yazid",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2080552",
    "name": "DeShields, Lawrence E",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106769",
    "name": "Heard, Vincent",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035530",
    "name": "Hobbs Jr., John T",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102724",
    "name": "Joseph, Marc D",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035840",
    "name": "Lodhi, Muhammad D",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2038948",
    "name": "Medina, Jose A",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2109523",
    "name": "Nebel, Benjamin",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107899",
    "name": "Shvets, Marko",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106691",
    "name": "Cabreja Contreras, Bryan E",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101669",
    "name": "Gray, Vincent T",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114520",
    "name": "Guzman, Jose",
    "departmentId": "070708",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2098639",
    "name": "Ngami, Janice",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034192",
    "name": "Ocampo, Enrique",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107078",
    "name": "Orellana Idrovo, Carlos",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058468",
    "name": "Ramirez, Nohemi",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2051487",
    "name": "Wozny, Krzysztof",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033982",
    "name": "Dastas Rodriguez, Alexis",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "2005398",
    "name": "Borko, Yevhen",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2013666",
    "name": "Crume, Andre",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034827",
    "name": "Czernia, David",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035236",
    "name": "Dixon, Wendell B",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034487",
    "name": "Johnson, Gerald",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1032898",
    "name": "Lucero, Victor",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2105197",
    "name": "Reina, Eric G",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106105",
    "name": "Wright, Deshaun",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1038475",
    "name": "Bowles, Leroy S",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034005",
    "name": "Chihuahua, Ismael",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034454",
    "name": "Czernia, Edward R",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106258",
    "name": "Elban, Haktan",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033824",
    "name": "Graciani, Antonio",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2102139",
    "name": "Hashoory, Naveed",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039246",
    "name": "Hernandez Jaimes, Jorge",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034801",
    "name": "Hernandez, Jesus",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106334",
    "name": "Huber, Sean",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093037",
    "name": "Huerta, Juan J",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034277",
    "name": "Latka, Grzegorz",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2100967",
    "name": "Ledesma Rogel, Eric",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034017",
    "name": "Miller, Rodrick",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1035158",
    "name": "Moore, Jawaharlal N",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2099777",
    "name": "Munoz, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093095",
    "name": "Niemiec, Marcin P",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034195",
    "name": "Quinones Jr, Francisco",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2019501",
    "name": "Reid, Clifton L",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1036615",
    "name": "Richardson, Aaron R",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1045689",
    "name": "Roman, Mario A",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106103",
    "name": "Salguero Hernandez, Alexis",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2036974",
    "name": "Gonzales, Gabriel N",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034523",
    "name": "Joseph, Micheal",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114259",
    "name": "Suarez, Justine D",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034235",
    "name": "Anguiano, Maria",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "1038819",
    "name": "Ramirez, Lorena I",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034200",
    "name": "Vazquez, Pepe",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102859",
    "name": "Fleming, Ana",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2071045",
    "name": "Ramirez, Ayax A",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2104759",
    "name": "Rivera, Marco A",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034712",
    "name": "Colindres Mejia, Belquis G",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107008",
    "name": "Guidry, Marcel W",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035524",
    "name": "Honorable, Willie C",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2009068",
    "name": "Jackson, Edna L",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106104",
    "name": "Lask, Christopher",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1043127",
    "name": "Loveberry, Pisces",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106582",
    "name": "Mohmand, Massih",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106504",
    "name": "Villegas, Jose S",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086521",
    "name": "Yakymchuk, Oleksandr",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114794",
    "name": "Essaid, Rachid",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114521",
    "name": "Morris, Antwin",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115358",
    "name": "Vortes, Leon",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040925",
    "name": "Dominguez, Ismael",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107009",
    "name": "Foster, Terrance A",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106828",
    "name": "Marginean, Andrei",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106940",
    "name": "Martinez, Cecilia",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1038204",
    "name": "Pacheco, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106333",
    "name": "Rojas de los Santos, Asdsalon",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033853",
    "name": "Segoviano, Juan",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2017705",
    "name": "Agramonte, Aaron",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111977",
    "name": "Brown, Carnell",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034309",
    "name": "Brownlow, Terence T",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2109677",
    "name": "Conley, Shekinah D",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034167",
    "name": "Gonzalez, Hugo",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106259",
    "name": "Knitter, Roman",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2020414",
    "name": "Martinez - Escarfullery, Gualberto",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112138",
    "name": "Martinez Vazquez, Rolando",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113947",
    "name": "Moreno, Steve",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2107165",
    "name": "Pace, Alonzo",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2031672",
    "name": "Santiago Cintron, Bredmarie",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111436",
    "name": "Smith, Sierra",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039243",
    "name": "Tafoya, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115347",
    "name": "tumurbaatar, uguudei",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2009948",
    "name": "Wardah, Dooreze I",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110166",
    "name": "Williams, Demarrion",
    "departmentId": "070704",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113768",
    "name": "Affoune, Yacine",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112825",
    "name": "Bayalkoti, Laxman",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110871",
    "name": "Santa Cruz, Jonathan",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078384",
    "name": "Arifi, Pleurat",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110523",
    "name": "Curcione, Joseph",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114792",
    "name": "Danish, Ali Jan",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112746",
    "name": "Hemmat, Ahmadjan",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112401",
    "name": "Hunt, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078619",
    "name": "Iguider, Hicham",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115484",
    "name": "Lyzniak, Dennis",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112112",
    "name": "Parker, Daron",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111437",
    "name": "Rico, Adrian",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114530",
    "name": "Villamarin Figueroa, Diana L",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "2112830",
    "name": "Abuhasheesh, Khaleel",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033766",
    "name": "Bate, Santoni",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062672",
    "name": "Estrada, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113218",
    "name": "Hernandez, Eduardo",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101668",
    "name": "Jonson, Jan Roeder R",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113528",
    "name": "Marin, Joshua",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113529",
    "name": "McNeal, Deshaun",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086491",
    "name": "Ocampo, Mike",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113530",
    "name": "Oriakhi, Osa",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107085",
    "name": "Ortiz Mejia, Daniel A",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2022470",
    "name": "Ramos Figueroa, Angel M",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114531",
    "name": "Shafiq, Arslan",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113448",
    "name": "Simpson, Keara s",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065546",
    "name": "Thalackan, James J",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034964",
    "name": "Torres, Silvia",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113960",
    "name": "Barrock, Aaron L",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2075655",
    "name": "Benakrouf, Yazid",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114262",
    "name": "Coleman, Deneen L",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2080552",
    "name": "DeShields, Lawrence E",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106769",
    "name": "Heard, Vincent",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035840",
    "name": "Lodhi, Muhammad D",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2112674",
    "name": "Magana, Jose",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2038948",
    "name": "Medina, Jose A",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2109523",
    "name": "Nebel, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107899",
    "name": "Shvets, Marko",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114385",
    "name": "Tinaztepe, mustafa",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106691",
    "name": "Cabreja Contreras, Bryan E",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062712",
    "name": "Fathollahi, Mohsen",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101669",
    "name": "Gray, Vincent T",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114520",
    "name": "Guzman, Jose",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2098639",
    "name": "Ngami, Janice",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034192",
    "name": "Ocampo, Enrique",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107078",
    "name": "Orellana Idrovo, Carlos",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2051487",
    "name": "Wozny, Krzysztof",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033982",
    "name": "Dastas Rodriguez, Alexis",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "2005398",
    "name": "Borko, Yevhen",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2053718",
    "name": "Cuyugan, Aldrin M",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035236",
    "name": "Dixon, Wendell B",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034487",
    "name": "Johnson, Gerald",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1032898",
    "name": "Lucero, Victor",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100564",
    "name": "Martin, Charles M",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2105197",
    "name": "Reina, Eric G",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106105",
    "name": "Wright, Deshaun",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100973",
    "name": "Akande, Nathan",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1038475",
    "name": "Bowles, Leroy S",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2014095",
    "name": "Edwards, Sharon L",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106258",
    "name": "Elban, Haktan",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033824",
    "name": "Graciani, Antonio",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2102139",
    "name": "Hashoory, Naveed",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039246",
    "name": "Hernandez Jaimes, Jorge",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2073510",
    "name": "Hernandez, Erika",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034801",
    "name": "Hernandez, Jesus",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106334",
    "name": "Huber, Sean",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093037",
    "name": "Huerta, Juan J",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2100967",
    "name": "Ledesma Rogel, Eric",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2067782",
    "name": "Medina, Jehad M",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2099777",
    "name": "Munoz, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093095",
    "name": "Niemiec, Marcin P",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2062686",
    "name": "Patel, Jayesh N",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034195",
    "name": "Quinones Jr, Francisco",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2019501",
    "name": "Reid, Clifton L",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1036615",
    "name": "Richardson, Aaron R",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1045689",
    "name": "Roman, Mario A",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106103",
    "name": "Salguero Hernandez, Alexis",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1041217",
    "name": "White, Kyle C",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2103700",
    "name": "Wideman, Kushonda",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2036974",
    "name": "Gonzales, Gabriel N",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034523",
    "name": "Joseph, Micheal",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114259",
    "name": "Suarez, Justine D",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034235",
    "name": "Anguiano, Maria",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "1038819",
    "name": "Ramirez, Lorena I",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102859",
    "name": "Fleming, Ana",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2104759",
    "name": "Rivera, Marco A",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2068862",
    "name": "Blockett, Tyrone",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034712",
    "name": "Colindres Mejia, Belquis G",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2074778",
    "name": "Dunn, Elbert",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107008",
    "name": "Guidry, Marcel W",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035524",
    "name": "Honorable, Willie C",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106104",
    "name": "Lask, Christopher",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106582",
    "name": "Mohmand, Massih",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106504",
    "name": "Villegas, Jose S",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086521",
    "name": "Yakymchuk, Oleksandr",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107009",
    "name": "Foster, Terrance A",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058653",
    "name": "Karimi, Jawid",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106828",
    "name": "Marginean, Andrei",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106940",
    "name": "Martinez, Cecilia",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1038204",
    "name": "Pacheco, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106333",
    "name": "Rojas de los Santos, Asdsalon",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2085230",
    "name": "Ashurov, Savlat",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111977",
    "name": "Brown, Carnell",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2109677",
    "name": "Conley, Shekinah D",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106259",
    "name": "Knitter, Roman",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2020414",
    "name": "Martinez - Escarfullery, Gualberto",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112138",
    "name": "Martinez Vazquez, Rolando",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113947",
    "name": "Moreno, Steve",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2107165",
    "name": "Pace, Alonzo",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115299",
    "name": "Perez, Daniel",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2031672",
    "name": "Santiago Cintron, Bredmarie",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2007551",
    "name": "Smith, Joshua E",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111436",
    "name": "Smith, Sierra",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115347",
    "name": "tumurbaatar, uguudei",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2009948",
    "name": "Wardah, Dooreze I",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110166",
    "name": "Williams, Demarrion",
    "departmentId": "070704",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106681",
    "name": "Wright, Laura L",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113768",
    "name": "Affoune, Yacine",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112825",
    "name": "Bayalkoti, Laxman",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085332",
    "name": "Bentouati, Sofiane",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110871",
    "name": "Santa Cruz, Jonathan",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111082",
    "name": "Slaughter, Darius",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078384",
    "name": "Arifi, Pleurat",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110523",
    "name": "Curcione, Joseph",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114792",
    "name": "Danish, Ali Jan",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2105200",
    "name": "Deahora, Roberto",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112746",
    "name": "Hemmat, Ahmadjan",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112401",
    "name": "Hunt, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078619",
    "name": "Iguider, Hicham",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114796",
    "name": "Luttrell, Angelisa",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115484",
    "name": "Lyzniak, Dennis",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112112",
    "name": "Parker, Daron",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111437",
    "name": "Rico, Adrian",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085146",
    "name": "Aabli, Youness",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2112830",
    "name": "Abuhasheesh, Khaleel",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106257",
    "name": "Cusniriuc, Ruben",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062672",
    "name": "Estrada, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113218",
    "name": "Hernandez, Eduardo",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101668",
    "name": "Jonson, Jan Roeder R",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113528",
    "name": "Marin, Joshua",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113529",
    "name": "McNeal, Deshaun",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086491",
    "name": "Ocampo, Mike",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113530",
    "name": "Oriakhi, Osa",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107085",
    "name": "Ortiz Mejia, Daniel A",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2022470",
    "name": "Ramos Figueroa, Angel M",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2088307",
    "name": "Sales, Aoustine G",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113448",
    "name": "Simpson, Keara s",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065546",
    "name": "Thalackan, James J",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113960",
    "name": "Barrock, Aaron L",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2075655",
    "name": "Benakrouf, Yazid",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114262",
    "name": "Coleman, Deneen L",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106769",
    "name": "Heard, Vincent",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2112674",
    "name": "Magana, Jose",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2109523",
    "name": "Nebel, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113961",
    "name": "Reavley, Brittany",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107899",
    "name": "Shvets, Marko",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114088",
    "name": "Tahir, Khelifa",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114385",
    "name": "Tinaztepe, mustafa",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106691",
    "name": "Cabreja Contreras, Bryan E",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062712",
    "name": "Fathollahi, Mohsen",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101669",
    "name": "Gray, Vincent T",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114520",
    "name": "Guzman, Jose",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076597",
    "name": "Nazzal, Mohammad N",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107078",
    "name": "Orellana Idrovo, Carlos",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2051487",
    "name": "Wozny, Krzysztof",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034858",
    "name": "Anderson, Gene",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2005398",
    "name": "Borko, Yevhen",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2053718",
    "name": "Cuyugan, Aldrin M",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035236",
    "name": "Dixon, Wendell B",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100564",
    "name": "Martin, Charles M",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2105197",
    "name": "Reina, Eric G",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106105",
    "name": "Wright, Deshaun",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100973",
    "name": "Akande, Nathan",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1038475",
    "name": "Bowles, Leroy S",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2014095",
    "name": "Edwards, Sharon L",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106258",
    "name": "Elban, Haktan",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033824",
    "name": "Graciani, Antonio",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040455",
    "name": "Harris, Michael F",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2102139",
    "name": "Hashoory, Naveed",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2073510",
    "name": "Hernandez, Erika",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106334",
    "name": "Huber, Sean",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093037",
    "name": "Huerta, Juan J",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033862",
    "name": "Johnson, David",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2100967",
    "name": "Ledesma Rogel, Eric",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2067782",
    "name": "Medina, Jehad M",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2099777",
    "name": "Munoz, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093095",
    "name": "Niemiec, Marcin P",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2062686",
    "name": "Patel, Jayesh N",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2019501",
    "name": "Reid, Clifton L",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1036615",
    "name": "Richardson, Aaron R",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1045689",
    "name": "Roman, Mario A",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106103",
    "name": "Salguero Hernandez, Alexis",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1031681",
    "name": "Torres, Julio C",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1041217",
    "name": "White, Kyle C",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2103700",
    "name": "Wideman, Kushonda",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2036974",
    "name": "Gonzales, Gabriel N",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034523",
    "name": "Joseph, Micheal",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114259",
    "name": "Suarez, Justine D",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1038819",
    "name": "Ramirez, Lorena I",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102859",
    "name": "Fleming, Ana",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2104759",
    "name": "Rivera, Marco A",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2068862",
    "name": "Blockett, Tyrone",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2042656",
    "name": "Debato, Lima A",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2074778",
    "name": "Dunn, Elbert",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107008",
    "name": "Guidry, Marcel W",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106104",
    "name": "Lask, Christopher",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106582",
    "name": "Mohmand, Massih",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1037743",
    "name": "Tran, Benjamin",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106504",
    "name": "Villegas, Jose S",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086521",
    "name": "Yakymchuk, Oleksandr",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065521",
    "name": "Forro, Nicolae",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107009",
    "name": "Foster, Terrance A",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2018550",
    "name": "Johnson, Eric B",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058653",
    "name": "Karimi, Jawid",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106828",
    "name": "Marginean, Andrei",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106940",
    "name": "Martinez, Cecilia",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1038204",
    "name": "Pacheco, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106333",
    "name": "Rojas de los Santos, Asdsalon",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2085230",
    "name": "Ashurov, Savlat",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033849",
    "name": "Brooks, Gary",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111977",
    "name": "Brown, Carnell",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2109677",
    "name": "Conley, Shekinah D",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034680",
    "name": "Huang, Yekuan",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106259",
    "name": "Knitter, Roman",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1042761",
    "name": "Mack, Eric M",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112138",
    "name": "Martinez Vazquez, Rolando",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113947",
    "name": "Moreno, Steve",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2107165",
    "name": "Pace, Alonzo",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2018809",
    "name": "Patel, Jagird V",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115299",
    "name": "Perez, Daniel",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2007551",
    "name": "Smith, Joshua E",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111436",
    "name": "Smith, Sierra",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115347",
    "name": "tumurbaatar, uguudei",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2009948",
    "name": "Wardah, Dooreze I",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110166",
    "name": "Williams, Demarrion",
    "departmentId": "070704",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106681",
    "name": "Wright, Laura L",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113768",
    "name": "Affoune, Yacine",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112825",
    "name": "Bayalkoti, Laxman",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085332",
    "name": "Bentouati, Sofiane",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110871",
    "name": "Santa Cruz, Jonathan",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111082",
    "name": "Slaughter, Darius",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078384",
    "name": "Arifi, Pleurat",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110523",
    "name": "Curcione, Joseph",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2105200",
    "name": "Deahora, Roberto",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112746",
    "name": "Hemmat, Ahmadjan",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112401",
    "name": "Hunt, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078619",
    "name": "Iguider, Hicham",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114796",
    "name": "Luttrell, Angelisa",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115484",
    "name": "Lyzniak, Dennis",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034180",
    "name": "Marroquin, Efrain",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2063365",
    "name": "O'Bryant, Stafford E",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112112",
    "name": "Parker, Daron",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111437",
    "name": "Rico, Adrian",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085146",
    "name": "Aabli, Youness",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2112830",
    "name": "Abuhasheesh, Khaleel",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2071871",
    "name": "Calderon, Maria G",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106257",
    "name": "Cusniriuc, Ruben",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113218",
    "name": "Hernandez, Eduardo",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2068159",
    "name": "Kim, Su O",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113528",
    "name": "Marin, Joshua",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113529",
    "name": "McNeal, Deshaun",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086491",
    "name": "Ocampo, Mike",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113530",
    "name": "Oriakhi, Osa",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107085",
    "name": "Ortiz Mejia, Daniel A",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2088307",
    "name": "Sales, Aoustine G",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113448",
    "name": "Simpson, Keara s",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076601",
    "name": "Suarez, Ewrin G",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113960",
    "name": "Barrock, Aaron L",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2075655",
    "name": "Benakrouf, Yazid",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114262",
    "name": "Coleman, Deneen L",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035530",
    "name": "Hobbs Jr., John T",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102724",
    "name": "Joseph, Marc D",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2112674",
    "name": "Magana, Jose",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2109523",
    "name": "Nebel, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113961",
    "name": "Reavley, Brittany",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107899",
    "name": "Shvets, Marko",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114088",
    "name": "Tahir, Khelifa",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114385",
    "name": "Tinaztepe, mustafa",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106691",
    "name": "Cabreja Contreras, Bryan E",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062712",
    "name": "Fathollahi, Mohsen",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114520",
    "name": "Guzman, Jose",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076597",
    "name": "Nazzal, Mohammad N",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107078",
    "name": "Orellana Idrovo, Carlos",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058468",
    "name": "Ramirez, Nohemi",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034858",
    "name": "Anderson, Gene",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2013666",
    "name": "Crume, Andre",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2053718",
    "name": "Cuyugan, Aldrin M",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034827",
    "name": "Czernia, David",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100564",
    "name": "Martin, Charles M",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2105197",
    "name": "Reina, Eric G",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106105",
    "name": "Wright, Deshaun",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100973",
    "name": "Akande, Nathan",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1038475",
    "name": "Bowles, Leroy S",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034005",
    "name": "Chihuahua, Ismael",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034454",
    "name": "Czernia, Edward R",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2014095",
    "name": "Edwards, Sharon L",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106258",
    "name": "Elban, Haktan",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033824",
    "name": "Graciani, Antonio",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040455",
    "name": "Harris, Michael F",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2102139",
    "name": "Hashoory, Naveed",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2073510",
    "name": "Hernandez, Erika",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106334",
    "name": "Huber, Sean",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093037",
    "name": "Huerta, Juan J",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033862",
    "name": "Johnson, David",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034277",
    "name": "Latka, Grzegorz",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2100967",
    "name": "Ledesma Rogel, Eric",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2067782",
    "name": "Medina, Jehad M",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034017",
    "name": "Miller, Rodrick",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1035158",
    "name": "Moore, Jawaharlal N",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2062686",
    "name": "Patel, Jayesh N",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1045689",
    "name": "Roman, Mario A",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106103",
    "name": "Salguero Hernandez, Alexis",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1031681",
    "name": "Torres, Julio C",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1041217",
    "name": "White, Kyle C",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2103700",
    "name": "Wideman, Kushonda",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2036974",
    "name": "Gonzales, Gabriel N",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114259",
    "name": "Suarez, Justine D",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1038819",
    "name": "Ramirez, Lorena I",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034200",
    "name": "Vazquez, Pepe",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "2071045",
    "name": "Ramirez, Ayax A",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2104759",
    "name": "Rivera, Marco A",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2068862",
    "name": "Blockett, Tyrone",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2042656",
    "name": "Debato, Lima A",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2074778",
    "name": "Dunn, Elbert",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107008",
    "name": "Guidry, Marcel W",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2009068",
    "name": "Jackson, Edna L",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1043127",
    "name": "Loveberry, Pisces",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1037743",
    "name": "Tran, Benjamin",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106504",
    "name": "Villegas, Jose S",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086521",
    "name": "Yakymchuk, Oleksandr",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114794",
    "name": "Essaid, Rachid",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114521",
    "name": "Morris, Antwin",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115358",
    "name": "Vortes, Leon",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040925",
    "name": "Dominguez, Ismael",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065521",
    "name": "Forro, Nicolae",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107009",
    "name": "Foster, Terrance A",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2018550",
    "name": "Johnson, Eric B",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058653",
    "name": "Karimi, Jawid",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106828",
    "name": "Marginean, Andrei",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106940",
    "name": "Martinez, Cecilia",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2031672",
    "name": "Santiago Cintron, Bredmarie",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033853",
    "name": "Segoviano, Juan",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2017705",
    "name": "Agramonte, Aaron",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085230",
    "name": "Ashurov, Savlat",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033849",
    "name": "Brooks, Gary",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111977",
    "name": "Brown, Carnell",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034309",
    "name": "Brownlow, Terence T",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2109677",
    "name": "Conley, Shekinah D",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034167",
    "name": "Gonzalez, Hugo",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034680",
    "name": "Huang, Yekuan",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106259",
    "name": "Knitter, Roman",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1042761",
    "name": "Mack, Eric M",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112138",
    "name": "Martinez Vazquez, Rolando",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113947",
    "name": "Moreno, Steve",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2018809",
    "name": "Patel, Jagird V",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115299",
    "name": "Perez, Daniel",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2007551",
    "name": "Smith, Joshua E",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039243",
    "name": "Tafoya, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115347",
    "name": "tumurbaatar, uguudei",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110166",
    "name": "Williams, Demarrion",
    "departmentId": "070704",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106681",
    "name": "Wright, Laura L",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113768",
    "name": "Affoune, Yacine",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112825",
    "name": "Bayalkoti, Laxman",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085332",
    "name": "Bentouati, Sofiane",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110871",
    "name": "Santa Cruz, Jonathan",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111082",
    "name": "Slaughter, Darius",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110523",
    "name": "Curcione, Joseph",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2105200",
    "name": "Deahora, Roberto",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112746",
    "name": "Hemmat, Ahmadjan",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112401",
    "name": "Hunt, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114796",
    "name": "Luttrell, Angelisa",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034180",
    "name": "Marroquin, Efrain",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2063365",
    "name": "O'Bryant, Stafford E",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112112",
    "name": "Parker, Daron",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111437",
    "name": "Rico, Adrian",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114530",
    "name": "Villamarin Figueroa, Diana L",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "2085146",
    "name": "Aabli, Youness",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2112830",
    "name": "Abuhasheesh, Khaleel",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033766",
    "name": "Bate, Santoni",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2071871",
    "name": "Calderon, Maria G",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106257",
    "name": "Cusniriuc, Ruben",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113218",
    "name": "Hernandez, Eduardo",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2068159",
    "name": "Kim, Su O",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113528",
    "name": "Marin, Joshua",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113529",
    "name": "McNeal, Deshaun",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113530",
    "name": "Oriakhi, Osa",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107085",
    "name": "Ortiz Mejia, Daniel A",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2088307",
    "name": "Sales, Aoustine G",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114531",
    "name": "Shafiq, Arslan",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113448",
    "name": "Simpson, Keara s",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076601",
    "name": "Suarez, Ewrin G",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034964",
    "name": "Torres, Silvia",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114262",
    "name": "Coleman, Deneen L",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2080552",
    "name": "DeShields, Lawrence E",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035530",
    "name": "Hobbs Jr., John T",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102724",
    "name": "Joseph, Marc D",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035840",
    "name": "Lodhi, Muhammad D",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2112674",
    "name": "Magana, Jose",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2038948",
    "name": "Medina, Jose A",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2109523",
    "name": "Nebel, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113961",
    "name": "Reavley, Brittany",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107899",
    "name": "Shvets, Marko",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114088",
    "name": "Tahir, Khelifa",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114385",
    "name": "Tinaztepe, mustafa",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062712",
    "name": "Fathollahi, Mohsen",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114520",
    "name": "Guzman, Jose",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076597",
    "name": "Nazzal, Mohammad N",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2098639",
    "name": "Ngami, Janice",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034192",
    "name": "Ocampo, Enrique",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107078",
    "name": "Orellana Idrovo, Carlos",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058468",
    "name": "Ramirez, Nohemi",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033982",
    "name": "Dastas Rodriguez, Alexis",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034858",
    "name": "Anderson, Gene",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2013666",
    "name": "Crume, Andre",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2053718",
    "name": "Cuyugan, Aldrin M",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034827",
    "name": "Czernia, David",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034487",
    "name": "Johnson, Gerald",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1032898",
    "name": "Lucero, Victor",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100564",
    "name": "Martin, Charles M",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2105197",
    "name": "Reina, Eric G",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100973",
    "name": "Akande, Nathan",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1038475",
    "name": "Bowles, Leroy S",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034005",
    "name": "Chihuahua, Ismael",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034454",
    "name": "Czernia, Edward R",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2014095",
    "name": "Edwards, Sharon L",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033824",
    "name": "Graciani, Antonio",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040455",
    "name": "Harris, Michael F",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2102139",
    "name": "Hashoory, Naveed",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039246",
    "name": "Hernandez Jaimes, Jorge",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2073510",
    "name": "Hernandez, Erika",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034801",
    "name": "Hernandez, Jesus",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106334",
    "name": "Huber, Sean",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093037",
    "name": "Huerta, Juan J",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033862",
    "name": "Johnson, David",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034277",
    "name": "Latka, Grzegorz",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2067782",
    "name": "Medina, Jehad M",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034017",
    "name": "Miller, Rodrick",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1035158",
    "name": "Moore, Jawaharlal N",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2062686",
    "name": "Patel, Jayesh N",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034195",
    "name": "Quinones Jr, Francisco",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1031681",
    "name": "Torres, Julio C",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1041217",
    "name": "White, Kyle C",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2103700",
    "name": "Wideman, Kushonda",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114259",
    "name": "Suarez, Justine D",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034235",
    "name": "Anguiano, Maria",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "1038819",
    "name": "Ramirez, Lorena I",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034200",
    "name": "Vazquez, Pepe",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "2071045",
    "name": "Ramirez, Ayax A",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2068862",
    "name": "Blockett, Tyrone",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034712",
    "name": "Colindres Mejia, Belquis G",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2042656",
    "name": "Debato, Lima A",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2074778",
    "name": "Dunn, Elbert",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035524",
    "name": "Honorable, Willie C",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2009068",
    "name": "Jackson, Edna L",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1043127",
    "name": "Loveberry, Pisces",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1037743",
    "name": "Tran, Benjamin",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106504",
    "name": "Villegas, Jose S",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086521",
    "name": "Yakymchuk, Oleksandr",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114794",
    "name": "Essaid, Rachid",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114521",
    "name": "Morris, Antwin",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115358",
    "name": "Vortes, Leon",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040925",
    "name": "Dominguez, Ismael",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065521",
    "name": "Forro, Nicolae",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2018550",
    "name": "Johnson, Eric B",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058653",
    "name": "Karimi, Jawid",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106828",
    "name": "Marginean, Andrei",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033853",
    "name": "Segoviano, Juan",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2017705",
    "name": "Agramonte, Aaron",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085230",
    "name": "Ashurov, Savlat",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033849",
    "name": "Brooks, Gary",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034309",
    "name": "Brownlow, Terence T",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034167",
    "name": "Gonzalez, Hugo",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034680",
    "name": "Huang, Yekuan",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106259",
    "name": "Knitter, Roman",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1042761",
    "name": "Mack, Eric M",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2020414",
    "name": "Martinez - Escarfullery, Gualberto",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2018809",
    "name": "Patel, Jagird V",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115299",
    "name": "Perez, Daniel",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2031672",
    "name": "Santiago Cintron, Bredmarie",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2007551",
    "name": "Smith, Joshua E",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039243",
    "name": "Tafoya, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110166",
    "name": "Williams, Demarrion",
    "departmentId": "070704",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106681",
    "name": "Wright, Laura L",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085332",
    "name": "Bentouati, Sofiane",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110871",
    "name": "Santa Cruz, Jonathan",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111082",
    "name": "Slaughter, Darius",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114792",
    "name": "Danish, Ali Jan",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2105200",
    "name": "Deahora, Roberto",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112746",
    "name": "Hemmat, Ahmadjan",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114796",
    "name": "Luttrell, Angelisa",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034180",
    "name": "Marroquin, Efrain",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2063365",
    "name": "O'Bryant, Stafford E",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112112",
    "name": "Parker, Daron",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111437",
    "name": "Rico, Adrian",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114530",
    "name": "Villamarin Figueroa, Diana L",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "2085146",
    "name": "Aabli, Youness",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033766",
    "name": "Bate, Santoni",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2071871",
    "name": "Calderon, Maria G",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106257",
    "name": "Cusniriuc, Ruben",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062672",
    "name": "Estrada, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101668",
    "name": "Jonson, Jan Roeder R",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2068159",
    "name": "Kim, Su O",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113528",
    "name": "Marin, Joshua",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113529",
    "name": "McNeal, Deshaun",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113530",
    "name": "Oriakhi, Osa",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107085",
    "name": "Ortiz Mejia, Daniel A",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2022470",
    "name": "Ramos Figueroa, Angel M",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2088307",
    "name": "Sales, Aoustine G",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114531",
    "name": "Shafiq, Arslan",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076601",
    "name": "Suarez, Ewrin G",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065546",
    "name": "Thalackan, James J",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034964",
    "name": "Torres, Silvia",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114262",
    "name": "Coleman, Deneen L",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2080552",
    "name": "DeShields, Lawrence E",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106769",
    "name": "Heard, Vincent",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035530",
    "name": "Hobbs Jr., John T",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102724",
    "name": "Joseph, Marc D",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035840",
    "name": "Lodhi, Muhammad D",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2112674",
    "name": "Magana, Jose",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2038948",
    "name": "Medina, Jose A",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113961",
    "name": "Reavley, Brittany",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114088",
    "name": "Tahir, Khelifa",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114385",
    "name": "Tinaztepe, mustafa",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062712",
    "name": "Fathollahi, Mohsen",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101669",
    "name": "Gray, Vincent T",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076597",
    "name": "Nazzal, Mohammad N",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2098639",
    "name": "Ngami, Janice",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034192",
    "name": "Ocampo, Enrique",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058468",
    "name": "Ramirez, Nohemi",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2051487",
    "name": "Wozny, Krzysztof",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033982",
    "name": "Dastas Rodriguez, Alexis",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034858",
    "name": "Anderson, Gene",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2005398",
    "name": "Borko, Yevhen",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2013666",
    "name": "Crume, Andre",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2053718",
    "name": "Cuyugan, Aldrin M",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034827",
    "name": "Czernia, David",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035236",
    "name": "Dixon, Wendell B",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034487",
    "name": "Johnson, Gerald",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1032898",
    "name": "Lucero, Victor",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100564",
    "name": "Martin, Charles M",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2100973",
    "name": "Akande, Nathan",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034005",
    "name": "Chihuahua, Ismael",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034454",
    "name": "Czernia, Edward R",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2014095",
    "name": "Edwards, Sharon L",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040455",
    "name": "Harris, Michael F",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039246",
    "name": "Hernandez Jaimes, Jorge",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2073510",
    "name": "Hernandez, Erika",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034801",
    "name": "Hernandez, Jesus",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033862",
    "name": "Johnson, David",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034277",
    "name": "Latka, Grzegorz",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2067782",
    "name": "Medina, Jehad M",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034017",
    "name": "Miller, Rodrick",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1035158",
    "name": "Moore, Jawaharlal N",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2099777",
    "name": "Munoz, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093095",
    "name": "Niemiec, Marcin P",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2062686",
    "name": "Patel, Jayesh N",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034195",
    "name": "Quinones Jr, Francisco",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2019501",
    "name": "Reid, Clifton L",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1036615",
    "name": "Richardson, Aaron R",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1031681",
    "name": "Torres, Julio C",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1041217",
    "name": "White, Kyle C",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2103700",
    "name": "Wideman, Kushonda",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034523",
    "name": "Joseph, Micheal",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034235",
    "name": "Anguiano, Maria",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034200",
    "name": "Vazquez, Pepe",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102859",
    "name": "Fleming, Ana",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2071045",
    "name": "Ramirez, Ayax A",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2068862",
    "name": "Blockett, Tyrone",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034712",
    "name": "Colindres Mejia, Belquis G",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2042656",
    "name": "Debato, Lima A",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2074778",
    "name": "Dunn, Elbert",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035524",
    "name": "Honorable, Willie C",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2009068",
    "name": "Jackson, Edna L",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106104",
    "name": "Lask, Christopher",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1043127",
    "name": "Loveberry, Pisces",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106582",
    "name": "Mohmand, Massih",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1037743",
    "name": "Tran, Benjamin",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114794",
    "name": "Essaid, Rachid",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114521",
    "name": "Morris, Antwin",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115358",
    "name": "Vortes, Leon",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040925",
    "name": "Dominguez, Ismael",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065521",
    "name": "Forro, Nicolae",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2018550",
    "name": "Johnson, Eric B",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058653",
    "name": "Karimi, Jawid",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1038204",
    "name": "Pacheco, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106333",
    "name": "Rojas de los Santos, Asdsalon",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033853",
    "name": "Segoviano, Juan",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2017705",
    "name": "Agramonte, Aaron",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085230",
    "name": "Ashurov, Savlat",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033849",
    "name": "Brooks, Gary",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034309",
    "name": "Brownlow, Terence T",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034167",
    "name": "Gonzalez, Hugo",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034680",
    "name": "Huang, Yekuan",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1042761",
    "name": "Mack, Eric M",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2020414",
    "name": "Martinez - Escarfullery, Gualberto",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2107165",
    "name": "Pace, Alonzo",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2018809",
    "name": "Patel, Jagird V",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115299",
    "name": "Perez, Daniel",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2031672",
    "name": "Santiago Cintron, Bredmarie",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2007551",
    "name": "Smith, Joshua E",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111436",
    "name": "Smith, Sierra",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039243",
    "name": "Tafoya, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2009948",
    "name": "Wardah, Dooreze I",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106681",
    "name": "Wright, Laura L",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2085332",
    "name": "Bentouati, Sofiane",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111082",
    "name": "Slaughter, Darius",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078384",
    "name": "Arifi, Pleurat",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114792",
    "name": "Danish, Ali Jan",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2105200",
    "name": "Deahora, Roberto",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078619",
    "name": "Iguider, Hicham",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114796",
    "name": "Luttrell, Angelisa",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115484",
    "name": "Lyzniak, Dennis",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034180",
    "name": "Marroquin, Efrain",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2063365",
    "name": "O'Bryant, Stafford E",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114530",
    "name": "Villamarin Figueroa, Diana L",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "2085146",
    "name": "Aabli, Youness",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033766",
    "name": "Bate, Santoni",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2071871",
    "name": "Calderon, Maria G",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106257",
    "name": "Cusniriuc, Ruben",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062672",
    "name": "Estrada, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101668",
    "name": "Jonson, Jan Roeder R",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2068159",
    "name": "Kim, Su O",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086491",
    "name": "Ocampo, Mike",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2022470",
    "name": "Ramos Figueroa, Angel M",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2088307",
    "name": "Sales, Aoustine G",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114531",
    "name": "Shafiq, Arslan",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076601",
    "name": "Suarez, Ewrin G",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065546",
    "name": "Thalackan, James J",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034964",
    "name": "Torres, Silvia",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113960",
    "name": "Barrock, Aaron L",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2075655",
    "name": "Benakrouf, Yazid",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2080552",
    "name": "DeShields, Lawrence E",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106769",
    "name": "Heard, Vincent",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035530",
    "name": "Hobbs Jr., John T",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102724",
    "name": "Joseph, Marc D",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035840",
    "name": "Lodhi, Muhammad D",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2038948",
    "name": "Medina, Jose A",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113961",
    "name": "Reavley, Brittany",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114088",
    "name": "Tahir, Khelifa",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106691",
    "name": "Cabreja Contreras, Bryan E",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101669",
    "name": "Gray, Vincent T",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076597",
    "name": "Nazzal, Mohammad N",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2098639",
    "name": "Ngami, Janice",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034192",
    "name": "Ocampo, Enrique",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058468",
    "name": "Ramirez, Nohemi",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2051487",
    "name": "Wozny, Krzysztof",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033982",
    "name": "Dastas Rodriguez, Alexis",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034858",
    "name": "Anderson, Gene",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2005398",
    "name": "Borko, Yevhen",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2013666",
    "name": "Crume, Andre",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034827",
    "name": "Czernia, David",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035236",
    "name": "Dixon, Wendell B",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034487",
    "name": "Johnson, Gerald",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1032898",
    "name": "Lucero, Victor",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106105",
    "name": "Wright, Deshaun",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034005",
    "name": "Chihuahua, Ismael",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034454",
    "name": "Czernia, Edward R",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106258",
    "name": "Elban, Haktan",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040455",
    "name": "Harris, Michael F",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039246",
    "name": "Hernandez Jaimes, Jorge",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034801",
    "name": "Hernandez, Jesus",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033862",
    "name": "Johnson, David",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034277",
    "name": "Latka, Grzegorz",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2100967",
    "name": "Ledesma Rogel, Eric",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034017",
    "name": "Miller, Rodrick",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1035158",
    "name": "Moore, Jawaharlal N",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2099777",
    "name": "Munoz, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2093095",
    "name": "Niemiec, Marcin P",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034195",
    "name": "Quinones Jr, Francisco",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2019501",
    "name": "Reid, Clifton L",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1036615",
    "name": "Richardson, Aaron R",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1045689",
    "name": "Roman, Mario A",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2106103",
    "name": "Salguero Hernandez, Alexis",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "1031681",
    "name": "Torres, Julio C",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "2036974",
    "name": "Gonzales, Gabriel N",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034523",
    "name": "Joseph, Micheal",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034235",
    "name": "Anguiano, Maria",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034200",
    "name": "Vazquez, Pepe",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102859",
    "name": "Fleming, Ana",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2071045",
    "name": "Ramirez, Ayax A",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "2104759",
    "name": "Rivera, Marco A",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034712",
    "name": "Colindres Mejia, Belquis G",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2042656",
    "name": "Debato, Lima A",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107008",
    "name": "Guidry, Marcel W",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035524",
    "name": "Honorable, Willie C",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2009068",
    "name": "Jackson, Edna L",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106104",
    "name": "Lask, Christopher",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1043127",
    "name": "Loveberry, Pisces",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106582",
    "name": "Mohmand, Massih",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "1037743",
    "name": "Tran, Benjamin",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114794",
    "name": "Essaid, Rachid",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114521",
    "name": "Morris, Antwin",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115358",
    "name": "Vortes, Leon",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "1040925",
    "name": "Dominguez, Ismael",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065521",
    "name": "Forro, Nicolae",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107009",
    "name": "Foster, Terrance A",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2018550",
    "name": "Johnson, Eric B",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106940",
    "name": "Martinez, Cecilia",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1038204",
    "name": "Pacheco, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106333",
    "name": "Rojas de los Santos, Asdsalon",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033853",
    "name": "Segoviano, Juan",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "2017705",
    "name": "Agramonte, Aaron",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1033849",
    "name": "Brooks, Gary",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111977",
    "name": "Brown, Carnell",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034309",
    "name": "Brownlow, Terence T",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2109677",
    "name": "Conley, Shekinah D",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034167",
    "name": "Gonzalez, Hugo",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034680",
    "name": "Huang, Yekuan",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1042761",
    "name": "Mack, Eric M",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2020414",
    "name": "Martinez - Escarfullery, Gualberto",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112138",
    "name": "Martinez Vazquez, Rolando",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113947",
    "name": "Moreno, Steve",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2107165",
    "name": "Pace, Alonzo",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2018809",
    "name": "Patel, Jagird V",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2031672",
    "name": "Santiago Cintron, Bredmarie",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2111436",
    "name": "Smith, Sierra",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "1039243",
    "name": "Tafoya, Alfonso",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115347",
    "name": "tumurbaatar, uguudei",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2009948",
    "name": "Wardah, Dooreze I",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "2113768",
    "name": "Affoune, Yacine",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112825",
    "name": "Bayalkoti, Laxman",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078384",
    "name": "Arifi, Pleurat",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2110523",
    "name": "Curcione, Joseph",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114792",
    "name": "Danish, Ali Jan",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2112401",
    "name": "Hunt, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2078619",
    "name": "Iguider, Hicham",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2115484",
    "name": "Lyzniak, Dennis",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "1034180",
    "name": "Marroquin, Efrain",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2063365",
    "name": "O'Bryant, Stafford E",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "2114530",
    "name": "Villamarin Figueroa, Diana L",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "2112830",
    "name": "Abuhasheesh, Khaleel",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1033766",
    "name": "Bate, Santoni",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2071871",
    "name": "Calderon, Maria G",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2062672",
    "name": "Estrada, Alejandro",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113218",
    "name": "Hernandez, Eduardo",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101668",
    "name": "Jonson, Jan Roeder R",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2068159",
    "name": "Kim, Su O",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2086491",
    "name": "Ocampo, Mike",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2022470",
    "name": "Ramos Figueroa, Angel M",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114531",
    "name": "Shafiq, Arslan",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113448",
    "name": "Simpson, Keara s",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2076601",
    "name": "Suarez, Ewrin G",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2065546",
    "name": "Thalackan, James J",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034964",
    "name": "Torres, Silvia",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "2113960",
    "name": "Barrock, Aaron L",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2075655",
    "name": "Benakrouf, Yazid",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2080552",
    "name": "DeShields, Lawrence E",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106769",
    "name": "Heard, Vincent",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035530",
    "name": "Hobbs Jr., John T",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2102724",
    "name": "Joseph, Marc D",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "1035840",
    "name": "Lodhi, Muhammad D",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2038948",
    "name": "Medina, Jose A",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2109523",
    "name": "Nebel, Benjamin",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107899",
    "name": "Shvets, Marko",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "2106691",
    "name": "Cabreja Contreras, Bryan E",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2101669",
    "name": "Gray, Vincent T",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2114520",
    "name": "Guzman, Jose",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2098639",
    "name": "Ngami, Janice",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "1034192",
    "name": "Ocampo, Enrique",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2107078",
    "name": "Orellana Idrovo, Carlos",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2058468",
    "name": "Ramirez, Nohemi",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "2051487",
    "name": "Wozny, Krzysztof",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  }
];

export const availableCdlScheduleDates = [...new Set(ordCdlDriverShifts.map((shift) => shift.date))];

export function hasCdlScheduleForDate(date: string) {
  return ordCdlDriverShifts.some((shift) => shift.date === date);
}

export function ordCdlDriversForDate(date: string): Driver[] {
  return ordCdlDriverShifts
    .filter((shift) => shift.date === date)
    .map((shift) => ({
      id: cdlDriverId(shift.employeeId),
      name: shift.name,
      truck: "-",
      radio: shift.employeeId.slice(-3),
      shiftStart: shift.shiftStart,
      shiftEnd: shift.shiftEnd,
    }));
}

export function ordCdlStaffForDate(date: string): StaffMember[] {
  const datedShifts = ordCdlDriverShifts.filter((shift) => shift.date === date);
  if (datedShifts.length > 0) return datedShifts.map(toStaffMember);

  const uniqueEmployees = new Map<string, CdlDriverShift>();
  for (const shift of ordCdlDriverShifts) {
    if (!uniqueEmployees.has(shift.employeeId)) uniqueEmployees.set(shift.employeeId, shift);
  }

  return [...uniqueEmployees.values()].map((shift) => ({
    ...toStaffMember({ ...shift, shiftStart: "00:00", shiftEnd: "00:00", hours: 0 }),
    status: "Unavailable",
    notes: "ORD CDL roster record. No shift loaded for selected date.",
  }));
}

function toStaffMember(shift: CdlDriverShift): StaffMember {
  return {
    id: cdlDriverId(shift.employeeId),
    name: shift.name,
    role: "Driver",
    location: "ORD",
    operationType: "mainline",
    shift: {
      start: shift.shiftStart,
      end: shift.shiftEnd,
      lengthHours: shift.hours,
    },
    status: "Available",
    assignedPush: null,
    notes: `ORD CDL schedule ${shift.date} - Dept ${shift.departmentId}`,
  };
}

function cdlDriverId(employeeId: string) {
  return `cdl-${employeeId}`;
}