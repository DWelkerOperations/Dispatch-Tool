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
    "employeeId": "ANON001",
    "name": "CDL Driver 001",
    "departmentId": "070708",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON002",
    "name": "CDL Driver 002",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON003",
    "name": "CDL Driver 003",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON004",
    "name": "CDL Driver 004",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON005",
    "name": "CDL Driver 005",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON006",
    "name": "CDL Driver 006",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON007",
    "name": "CDL Driver 007",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON008",
    "name": "CDL Driver 008",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON009",
    "name": "CDL Driver 009",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON010",
    "name": "CDL Driver 010",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON011",
    "name": "CDL Driver 011",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON012",
    "name": "CDL Driver 012",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON013",
    "name": "CDL Driver 013",
    "departmentId": "070708",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON014",
    "name": "CDL Driver 014",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON015",
    "name": "CDL Driver 015",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON016",
    "name": "CDL Driver 016",
    "departmentId": "070701",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON017",
    "name": "CDL Driver 017",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON018",
    "name": "CDL Driver 018",
    "departmentId": "070702",
    "date": "2026-04-30",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON019",
    "name": "CDL Driver 019",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON020",
    "name": "CDL Driver 020",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON021",
    "name": "CDL Driver 021",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON022",
    "name": "CDL Driver 022",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON023",
    "name": "CDL Driver 023",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON024",
    "name": "CDL Driver 024",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON025",
    "name": "CDL Driver 025",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON026",
    "name": "CDL Driver 026",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON027",
    "name": "CDL Driver 027",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON028",
    "name": "CDL Driver 028",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON029",
    "name": "CDL Driver 029",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON030",
    "name": "CDL Driver 030",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON031",
    "name": "CDL Driver 031",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON032",
    "name": "CDL Driver 032",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON033",
    "name": "CDL Driver 033",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON034",
    "name": "CDL Driver 034",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON035",
    "name": "CDL Driver 035",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON036",
    "name": "CDL Driver 036",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON037",
    "name": "CDL Driver 037",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON038",
    "name": "CDL Driver 038",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON039",
    "name": "CDL Driver 039",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON040",
    "name": "CDL Driver 040",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON041",
    "name": "CDL Driver 041",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON042",
    "name": "CDL Driver 042",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON043",
    "name": "CDL Driver 043",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON044",
    "name": "CDL Driver 044",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON045",
    "name": "CDL Driver 045",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON046",
    "name": "CDL Driver 046",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON047",
    "name": "CDL Driver 047",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON048",
    "name": "CDL Driver 048",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON049",
    "name": "CDL Driver 049",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON050",
    "name": "CDL Driver 050",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON051",
    "name": "CDL Driver 051",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON052",
    "name": "CDL Driver 052",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON053",
    "name": "CDL Driver 053",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON054",
    "name": "CDL Driver 054",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON055",
    "name": "CDL Driver 055",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON056",
    "name": "CDL Driver 056",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON057",
    "name": "CDL Driver 057",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON058",
    "name": "CDL Driver 058",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON059",
    "name": "CDL Driver 059",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON060",
    "name": "CDL Driver 060",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON061",
    "name": "CDL Driver 061",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON062",
    "name": "CDL Driver 062",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON063",
    "name": "CDL Driver 063",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON064",
    "name": "CDL Driver 064",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON065",
    "name": "CDL Driver 065",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON066",
    "name": "CDL Driver 066",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON067",
    "name": "CDL Driver 067",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON068",
    "name": "CDL Driver 068",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON069",
    "name": "CDL Driver 069",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON070",
    "name": "CDL Driver 070",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON071",
    "name": "CDL Driver 071",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON072",
    "name": "CDL Driver 072",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON073",
    "name": "CDL Driver 073",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON074",
    "name": "CDL Driver 074",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON075",
    "name": "CDL Driver 075",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON076",
    "name": "CDL Driver 076",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON077",
    "name": "CDL Driver 077",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON078",
    "name": "CDL Driver 078",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON079",
    "name": "CDL Driver 079",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON080",
    "name": "CDL Driver 080",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON081",
    "name": "CDL Driver 081",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON082",
    "name": "CDL Driver 082",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON083",
    "name": "CDL Driver 083",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON084",
    "name": "CDL Driver 084",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON085",
    "name": "CDL Driver 085",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON086",
    "name": "CDL Driver 086",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON087",
    "name": "CDL Driver 087",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON088",
    "name": "CDL Driver 088",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON089",
    "name": "CDL Driver 089",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON090",
    "name": "CDL Driver 090",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON091",
    "name": "CDL Driver 091",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON092",
    "name": "CDL Driver 092",
    "departmentId": "070704",
    "date": "2026-05-01",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON093",
    "name": "CDL Driver 093",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON094",
    "name": "CDL Driver 094",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON095",
    "name": "CDL Driver 095",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON096",
    "name": "CDL Driver 096",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON097",
    "name": "CDL Driver 097",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON098",
    "name": "CDL Driver 098",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON099",
    "name": "CDL Driver 099",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON100",
    "name": "CDL Driver 100",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON101",
    "name": "CDL Driver 101",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON102",
    "name": "CDL Driver 102",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON103",
    "name": "CDL Driver 103",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON104",
    "name": "CDL Driver 104",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON105",
    "name": "CDL Driver 105",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "ANON106",
    "name": "CDL Driver 106",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON107",
    "name": "CDL Driver 107",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON108",
    "name": "CDL Driver 108",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON109",
    "name": "CDL Driver 109",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON110",
    "name": "CDL Driver 110",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON111",
    "name": "CDL Driver 111",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON112",
    "name": "CDL Driver 112",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON113",
    "name": "CDL Driver 113",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON114",
    "name": "CDL Driver 114",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON115",
    "name": "CDL Driver 115",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON116",
    "name": "CDL Driver 116",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON117",
    "name": "CDL Driver 117",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON118",
    "name": "CDL Driver 118",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON119",
    "name": "CDL Driver 119",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON120",
    "name": "CDL Driver 120",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON001",
    "name": "CDL Driver 001",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON002",
    "name": "CDL Driver 002",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON121",
    "name": "CDL Driver 121",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON003",
    "name": "CDL Driver 003",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON004",
    "name": "CDL Driver 004",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON007",
    "name": "CDL Driver 007",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON122",
    "name": "CDL Driver 122",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON008",
    "name": "CDL Driver 008",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON009",
    "name": "CDL Driver 009",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON010",
    "name": "CDL Driver 010",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON123",
    "name": "CDL Driver 123",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON011",
    "name": "CDL Driver 011",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON124",
    "name": "CDL Driver 124",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON012",
    "name": "CDL Driver 012",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON013",
    "name": "CDL Driver 013",
    "departmentId": "070708",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON014",
    "name": "CDL Driver 014",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON015",
    "name": "CDL Driver 015",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON016",
    "name": "CDL Driver 016",
    "departmentId": "070701",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON018",
    "name": "CDL Driver 018",
    "departmentId": "070702",
    "date": "2026-05-01",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON019",
    "name": "CDL Driver 019",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON020",
    "name": "CDL Driver 020",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON125",
    "name": "CDL Driver 125",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON023",
    "name": "CDL Driver 023",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON024",
    "name": "CDL Driver 024",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON025",
    "name": "CDL Driver 025",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON126",
    "name": "CDL Driver 126",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON026",
    "name": "CDL Driver 026",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON027",
    "name": "CDL Driver 027",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON127",
    "name": "CDL Driver 127",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON028",
    "name": "CDL Driver 028",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON128",
    "name": "CDL Driver 128",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON031",
    "name": "CDL Driver 031",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON032",
    "name": "CDL Driver 032",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON033",
    "name": "CDL Driver 033",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON034",
    "name": "CDL Driver 034",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON129",
    "name": "CDL Driver 129",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON035",
    "name": "CDL Driver 035",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON036",
    "name": "CDL Driver 036",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON037",
    "name": "CDL Driver 037",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON039",
    "name": "CDL Driver 039",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON130",
    "name": "CDL Driver 130",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON042",
    "name": "CDL Driver 042",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON043",
    "name": "CDL Driver 043",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON131",
    "name": "CDL Driver 131",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON044",
    "name": "CDL Driver 044",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON045",
    "name": "CDL Driver 045",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON046",
    "name": "CDL Driver 046",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON047",
    "name": "CDL Driver 047",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON048",
    "name": "CDL Driver 048",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON132",
    "name": "CDL Driver 132",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON133",
    "name": "CDL Driver 133",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON049",
    "name": "CDL Driver 049",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON050",
    "name": "CDL Driver 050",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON051",
    "name": "CDL Driver 051",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON052",
    "name": "CDL Driver 052",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON053",
    "name": "CDL Driver 053",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON055",
    "name": "CDL Driver 055",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON057",
    "name": "CDL Driver 057",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON134",
    "name": "CDL Driver 134",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON058",
    "name": "CDL Driver 058",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON135",
    "name": "CDL Driver 135",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON059",
    "name": "CDL Driver 059",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON060",
    "name": "CDL Driver 060",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON062",
    "name": "CDL Driver 062",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON064",
    "name": "CDL Driver 064",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON065",
    "name": "CDL Driver 065",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON066",
    "name": "CDL Driver 066",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON071",
    "name": "CDL Driver 071",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON136",
    "name": "CDL Driver 136",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON072",
    "name": "CDL Driver 072",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON073",
    "name": "CDL Driver 073",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON074",
    "name": "CDL Driver 074",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON075",
    "name": "CDL Driver 075",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON137",
    "name": "CDL Driver 137",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON078",
    "name": "CDL Driver 078",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON080",
    "name": "CDL Driver 080",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON082",
    "name": "CDL Driver 082",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON083",
    "name": "CDL Driver 083",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON084",
    "name": "CDL Driver 084",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON085",
    "name": "CDL Driver 085",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON086",
    "name": "CDL Driver 086",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON138",
    "name": "CDL Driver 138",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON087",
    "name": "CDL Driver 087",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON139",
    "name": "CDL Driver 139",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON088",
    "name": "CDL Driver 088",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON090",
    "name": "CDL Driver 090",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON091",
    "name": "CDL Driver 091",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON092",
    "name": "CDL Driver 092",
    "departmentId": "070704",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON140",
    "name": "CDL Driver 140",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON093",
    "name": "CDL Driver 093",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON094",
    "name": "CDL Driver 094",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON141",
    "name": "CDL Driver 141",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON095",
    "name": "CDL Driver 095",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON142",
    "name": "CDL Driver 142",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON096",
    "name": "CDL Driver 096",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON097",
    "name": "CDL Driver 097",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON098",
    "name": "CDL Driver 098",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON143",
    "name": "CDL Driver 143",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON099",
    "name": "CDL Driver 099",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON100",
    "name": "CDL Driver 100",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON101",
    "name": "CDL Driver 101",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON144",
    "name": "CDL Driver 144",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON102",
    "name": "CDL Driver 102",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON103",
    "name": "CDL Driver 103",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON104",
    "name": "CDL Driver 104",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON145",
    "name": "CDL Driver 145",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON106",
    "name": "CDL Driver 106",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON146",
    "name": "CDL Driver 146",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON108",
    "name": "CDL Driver 108",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON109",
    "name": "CDL Driver 109",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON110",
    "name": "CDL Driver 110",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON111",
    "name": "CDL Driver 111",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON112",
    "name": "CDL Driver 112",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON113",
    "name": "CDL Driver 113",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON114",
    "name": "CDL Driver 114",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON115",
    "name": "CDL Driver 115",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON116",
    "name": "CDL Driver 116",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON147",
    "name": "CDL Driver 147",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON118",
    "name": "CDL Driver 118",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON119",
    "name": "CDL Driver 119",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON001",
    "name": "CDL Driver 001",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON002",
    "name": "CDL Driver 002",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON121",
    "name": "CDL Driver 121",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON004",
    "name": "CDL Driver 004",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON122",
    "name": "CDL Driver 122",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON009",
    "name": "CDL Driver 009",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON148",
    "name": "CDL Driver 148",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON010",
    "name": "CDL Driver 010",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON149",
    "name": "CDL Driver 149",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON123",
    "name": "CDL Driver 123",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON011",
    "name": "CDL Driver 011",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON124",
    "name": "CDL Driver 124",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON012",
    "name": "CDL Driver 012",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON013",
    "name": "CDL Driver 013",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON150",
    "name": "CDL Driver 150",
    "departmentId": "070708",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON016",
    "name": "CDL Driver 016",
    "departmentId": "070701",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON018",
    "name": "CDL Driver 018",
    "departmentId": "070702",
    "date": "2026-05-02",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON151",
    "name": "CDL Driver 151",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON020",
    "name": "CDL Driver 020",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON125",
    "name": "CDL Driver 125",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON023",
    "name": "CDL Driver 023",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON126",
    "name": "CDL Driver 126",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON026",
    "name": "CDL Driver 026",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON027",
    "name": "CDL Driver 027",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON127",
    "name": "CDL Driver 127",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON028",
    "name": "CDL Driver 028",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON128",
    "name": "CDL Driver 128",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON031",
    "name": "CDL Driver 031",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON032",
    "name": "CDL Driver 032",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON152",
    "name": "CDL Driver 152",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON033",
    "name": "CDL Driver 033",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON129",
    "name": "CDL Driver 129",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON036",
    "name": "CDL Driver 036",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON037",
    "name": "CDL Driver 037",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON153",
    "name": "CDL Driver 153",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON039",
    "name": "CDL Driver 039",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON130",
    "name": "CDL Driver 130",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON042",
    "name": "CDL Driver 042",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON043",
    "name": "CDL Driver 043",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON131",
    "name": "CDL Driver 131",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON045",
    "name": "CDL Driver 045",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON046",
    "name": "CDL Driver 046",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON047",
    "name": "CDL Driver 047",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON048",
    "name": "CDL Driver 048",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON154",
    "name": "CDL Driver 154",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON132",
    "name": "CDL Driver 132",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON133",
    "name": "CDL Driver 133",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON049",
    "name": "CDL Driver 049",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON050",
    "name": "CDL Driver 050",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON051",
    "name": "CDL Driver 051",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON053",
    "name": "CDL Driver 053",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON055",
    "name": "CDL Driver 055",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON057",
    "name": "CDL Driver 057",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON134",
    "name": "CDL Driver 134",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON155",
    "name": "CDL Driver 155",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON135",
    "name": "CDL Driver 135",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON059",
    "name": "CDL Driver 059",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON062",
    "name": "CDL Driver 062",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON064",
    "name": "CDL Driver 064",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON156",
    "name": "CDL Driver 156",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON065",
    "name": "CDL Driver 065",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON066",
    "name": "CDL Driver 066",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON157",
    "name": "CDL Driver 157",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON071",
    "name": "CDL Driver 071",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON158",
    "name": "CDL Driver 158",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON136",
    "name": "CDL Driver 136",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON072",
    "name": "CDL Driver 072",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON073",
    "name": "CDL Driver 073",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON074",
    "name": "CDL Driver 074",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON075",
    "name": "CDL Driver 075",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON137",
    "name": "CDL Driver 137",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON159",
    "name": "CDL Driver 159",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON078",
    "name": "CDL Driver 078",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON080",
    "name": "CDL Driver 080",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON160",
    "name": "CDL Driver 160",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON082",
    "name": "CDL Driver 082",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON161",
    "name": "CDL Driver 161",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON084",
    "name": "CDL Driver 084",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON085",
    "name": "CDL Driver 085",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON086",
    "name": "CDL Driver 086",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON162",
    "name": "CDL Driver 162",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON138",
    "name": "CDL Driver 138",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON139",
    "name": "CDL Driver 139",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON088",
    "name": "CDL Driver 088",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON090",
    "name": "CDL Driver 090",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON091",
    "name": "CDL Driver 091",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON092",
    "name": "CDL Driver 092",
    "departmentId": "070704",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON140",
    "name": "CDL Driver 140",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON093",
    "name": "CDL Driver 093",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON094",
    "name": "CDL Driver 094",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON141",
    "name": "CDL Driver 141",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON095",
    "name": "CDL Driver 095",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON142",
    "name": "CDL Driver 142",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON096",
    "name": "CDL Driver 096",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON097",
    "name": "CDL Driver 097",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON143",
    "name": "CDL Driver 143",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON099",
    "name": "CDL Driver 099",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON100",
    "name": "CDL Driver 100",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON101",
    "name": "CDL Driver 101",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON144",
    "name": "CDL Driver 144",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON102",
    "name": "CDL Driver 102",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON163",
    "name": "CDL Driver 163",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON164",
    "name": "CDL Driver 164",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON103",
    "name": "CDL Driver 103",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON104",
    "name": "CDL Driver 104",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON145",
    "name": "CDL Driver 145",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON106",
    "name": "CDL Driver 106",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON165",
    "name": "CDL Driver 165",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON146",
    "name": "CDL Driver 146",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON109",
    "name": "CDL Driver 109",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON166",
    "name": "CDL Driver 166",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON111",
    "name": "CDL Driver 111",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON112",
    "name": "CDL Driver 112",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON113",
    "name": "CDL Driver 113",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON114",
    "name": "CDL Driver 114",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON115",
    "name": "CDL Driver 115",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON147",
    "name": "CDL Driver 147",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON118",
    "name": "CDL Driver 118",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON167",
    "name": "CDL Driver 167",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON001",
    "name": "CDL Driver 001",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON002",
    "name": "CDL Driver 002",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON121",
    "name": "CDL Driver 121",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON005",
    "name": "CDL Driver 005",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON006",
    "name": "CDL Driver 006",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON122",
    "name": "CDL Driver 122",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON009",
    "name": "CDL Driver 009",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON148",
    "name": "CDL Driver 148",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON010",
    "name": "CDL Driver 010",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON149",
    "name": "CDL Driver 149",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON123",
    "name": "CDL Driver 123",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON011",
    "name": "CDL Driver 011",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON124",
    "name": "CDL Driver 124",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON013",
    "name": "CDL Driver 013",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON150",
    "name": "CDL Driver 150",
    "departmentId": "070708",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON016",
    "name": "CDL Driver 016",
    "departmentId": "070701",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON017",
    "name": "CDL Driver 017",
    "departmentId": "070702",
    "date": "2026-05-03",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON151",
    "name": "CDL Driver 151",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON021",
    "name": "CDL Driver 021",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON125",
    "name": "CDL Driver 125",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON022",
    "name": "CDL Driver 022",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON126",
    "name": "CDL Driver 126",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON026",
    "name": "CDL Driver 026",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON027",
    "name": "CDL Driver 027",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON127",
    "name": "CDL Driver 127",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON028",
    "name": "CDL Driver 028",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON029",
    "name": "CDL Driver 029",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON030",
    "name": "CDL Driver 030",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON128",
    "name": "CDL Driver 128",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON031",
    "name": "CDL Driver 031",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON032",
    "name": "CDL Driver 032",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON152",
    "name": "CDL Driver 152",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON033",
    "name": "CDL Driver 033",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON129",
    "name": "CDL Driver 129",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON036",
    "name": "CDL Driver 036",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON037",
    "name": "CDL Driver 037",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON153",
    "name": "CDL Driver 153",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON038",
    "name": "CDL Driver 038",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON039",
    "name": "CDL Driver 039",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON130",
    "name": "CDL Driver 130",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON040",
    "name": "CDL Driver 040",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON041",
    "name": "CDL Driver 041",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON131",
    "name": "CDL Driver 131",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON047",
    "name": "CDL Driver 047",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON048",
    "name": "CDL Driver 048",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON154",
    "name": "CDL Driver 154",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON132",
    "name": "CDL Driver 132",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON133",
    "name": "CDL Driver 133",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON049",
    "name": "CDL Driver 049",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON051",
    "name": "CDL Driver 051",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON053",
    "name": "CDL Driver 053",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON054",
    "name": "CDL Driver 054",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON056",
    "name": "CDL Driver 056",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON057",
    "name": "CDL Driver 057",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON134",
    "name": "CDL Driver 134",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON155",
    "name": "CDL Driver 155",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON135",
    "name": "CDL Driver 135",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON059",
    "name": "CDL Driver 059",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON061",
    "name": "CDL Driver 061",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON063",
    "name": "CDL Driver 063",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON156",
    "name": "CDL Driver 156",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON065",
    "name": "CDL Driver 065",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON066",
    "name": "CDL Driver 066",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON067",
    "name": "CDL Driver 067",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON068",
    "name": "CDL Driver 068",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON069",
    "name": "CDL Driver 069",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON070",
    "name": "CDL Driver 070",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON157",
    "name": "CDL Driver 157",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON071",
    "name": "CDL Driver 071",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON158",
    "name": "CDL Driver 158",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON136",
    "name": "CDL Driver 136",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON072",
    "name": "CDL Driver 072",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON073",
    "name": "CDL Driver 073",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON087",
    "name": "CDL Driver 087",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON076",
    "name": "CDL Driver 076",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON077",
    "name": "CDL Driver 077",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON137",
    "name": "CDL Driver 137",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON159",
    "name": "CDL Driver 159",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON078",
    "name": "CDL Driver 078",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON079",
    "name": "CDL Driver 079",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON080",
    "name": "CDL Driver 080",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON081",
    "name": "CDL Driver 081",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON160",
    "name": "CDL Driver 160",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON082",
    "name": "CDL Driver 082",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON161",
    "name": "CDL Driver 161",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON084",
    "name": "CDL Driver 084",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON085",
    "name": "CDL Driver 085",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON162",
    "name": "CDL Driver 162",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON138",
    "name": "CDL Driver 138",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON139",
    "name": "CDL Driver 139",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON089",
    "name": "CDL Driver 089",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON090",
    "name": "CDL Driver 090",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON092",
    "name": "CDL Driver 092",
    "departmentId": "070704",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON140",
    "name": "CDL Driver 140",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON093",
    "name": "CDL Driver 093",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON094",
    "name": "CDL Driver 094",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON141",
    "name": "CDL Driver 141",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON095",
    "name": "CDL Driver 095",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON142",
    "name": "CDL Driver 142",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON097",
    "name": "CDL Driver 097",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON143",
    "name": "CDL Driver 143",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON099",
    "name": "CDL Driver 099",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON100",
    "name": "CDL Driver 100",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON144",
    "name": "CDL Driver 144",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON163",
    "name": "CDL Driver 163",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON164",
    "name": "CDL Driver 164",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON103",
    "name": "CDL Driver 103",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON104",
    "name": "CDL Driver 104",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON105",
    "name": "CDL Driver 105",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "ANON145",
    "name": "CDL Driver 145",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON106",
    "name": "CDL Driver 106",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON107",
    "name": "CDL Driver 107",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON165",
    "name": "CDL Driver 165",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON146",
    "name": "CDL Driver 146",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON109",
    "name": "CDL Driver 109",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON166",
    "name": "CDL Driver 166",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON111",
    "name": "CDL Driver 111",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON112",
    "name": "CDL Driver 112",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON114",
    "name": "CDL Driver 114",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON115",
    "name": "CDL Driver 115",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON147",
    "name": "CDL Driver 147",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON117",
    "name": "CDL Driver 117",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON118",
    "name": "CDL Driver 118",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON167",
    "name": "CDL Driver 167",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON120",
    "name": "CDL Driver 120",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON121",
    "name": "CDL Driver 121",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON003",
    "name": "CDL Driver 003",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON005",
    "name": "CDL Driver 005",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON006",
    "name": "CDL Driver 006",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON007",
    "name": "CDL Driver 007",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON122",
    "name": "CDL Driver 122",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON008",
    "name": "CDL Driver 008",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON009",
    "name": "CDL Driver 009",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON148",
    "name": "CDL Driver 148",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON010",
    "name": "CDL Driver 010",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON149",
    "name": "CDL Driver 149",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON123",
    "name": "CDL Driver 123",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON124",
    "name": "CDL Driver 124",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON013",
    "name": "CDL Driver 013",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON150",
    "name": "CDL Driver 150",
    "departmentId": "070708",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON014",
    "name": "CDL Driver 014",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON015",
    "name": "CDL Driver 015",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON016",
    "name": "CDL Driver 016",
    "departmentId": "070701",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON017",
    "name": "CDL Driver 017",
    "departmentId": "070702",
    "date": "2026-05-04",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON019",
    "name": "CDL Driver 019",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON151",
    "name": "CDL Driver 151",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON021",
    "name": "CDL Driver 021",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON125",
    "name": "CDL Driver 125",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON022",
    "name": "CDL Driver 022",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON024",
    "name": "CDL Driver 024",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON025",
    "name": "CDL Driver 025",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON126",
    "name": "CDL Driver 126",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON026",
    "name": "CDL Driver 026",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON127",
    "name": "CDL Driver 127",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON028",
    "name": "CDL Driver 028",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON029",
    "name": "CDL Driver 029",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON030",
    "name": "CDL Driver 030",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON128",
    "name": "CDL Driver 128",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON032",
    "name": "CDL Driver 032",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON152",
    "name": "CDL Driver 152",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON033",
    "name": "CDL Driver 033",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON034",
    "name": "CDL Driver 034",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON129",
    "name": "CDL Driver 129",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON035",
    "name": "CDL Driver 035",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON036",
    "name": "CDL Driver 036",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON037",
    "name": "CDL Driver 037",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON153",
    "name": "CDL Driver 153",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON038",
    "name": "CDL Driver 038",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON130",
    "name": "CDL Driver 130",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON040",
    "name": "CDL Driver 040",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON041",
    "name": "CDL Driver 041",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON131",
    "name": "CDL Driver 131",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON044",
    "name": "CDL Driver 044",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON154",
    "name": "CDL Driver 154",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON132",
    "name": "CDL Driver 132",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON133",
    "name": "CDL Driver 133",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON051",
    "name": "CDL Driver 051",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON052",
    "name": "CDL Driver 052",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON053",
    "name": "CDL Driver 053",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON054",
    "name": "CDL Driver 054",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON056",
    "name": "CDL Driver 056",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON134",
    "name": "CDL Driver 134",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON058",
    "name": "CDL Driver 058",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON155",
    "name": "CDL Driver 155",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON135",
    "name": "CDL Driver 135",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON060",
    "name": "CDL Driver 060",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON061",
    "name": "CDL Driver 061",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON063",
    "name": "CDL Driver 063",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON156",
    "name": "CDL Driver 156",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON065",
    "name": "CDL Driver 065",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON066",
    "name": "CDL Driver 066",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON067",
    "name": "CDL Driver 067",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON068",
    "name": "CDL Driver 068",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON069",
    "name": "CDL Driver 069",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON070",
    "name": "CDL Driver 070",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON157",
    "name": "CDL Driver 157",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON158",
    "name": "CDL Driver 158",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON136",
    "name": "CDL Driver 136",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON072",
    "name": "CDL Driver 072",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON076",
    "name": "CDL Driver 076",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON077",
    "name": "CDL Driver 077",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON137",
    "name": "CDL Driver 137",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON159",
    "name": "CDL Driver 159",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON079",
    "name": "CDL Driver 079",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON081",
    "name": "CDL Driver 081",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON160",
    "name": "CDL Driver 160",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON082",
    "name": "CDL Driver 082",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON161",
    "name": "CDL Driver 161",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON083",
    "name": "CDL Driver 083",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON162",
    "name": "CDL Driver 162",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON138",
    "name": "CDL Driver 138",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON087",
    "name": "CDL Driver 087",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON139",
    "name": "CDL Driver 139",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON089",
    "name": "CDL Driver 089",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON092",
    "name": "CDL Driver 092",
    "departmentId": "070704",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON140",
    "name": "CDL Driver 140",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON141",
    "name": "CDL Driver 141",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON095",
    "name": "CDL Driver 095",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON142",
    "name": "CDL Driver 142",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON098",
    "name": "CDL Driver 098",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON143",
    "name": "CDL Driver 143",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON099",
    "name": "CDL Driver 099",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON144",
    "name": "CDL Driver 144",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON163",
    "name": "CDL Driver 163",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON164",
    "name": "CDL Driver 164",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON103",
    "name": "CDL Driver 103",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON104",
    "name": "CDL Driver 104",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON105",
    "name": "CDL Driver 105",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "ANON145",
    "name": "CDL Driver 145",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON107",
    "name": "CDL Driver 107",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON165",
    "name": "CDL Driver 165",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON146",
    "name": "CDL Driver 146",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON108",
    "name": "CDL Driver 108",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON110",
    "name": "CDL Driver 110",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON166",
    "name": "CDL Driver 166",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON111",
    "name": "CDL Driver 111",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON112",
    "name": "CDL Driver 112",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON114",
    "name": "CDL Driver 114",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON115",
    "name": "CDL Driver 115",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON116",
    "name": "CDL Driver 116",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON147",
    "name": "CDL Driver 147",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON117",
    "name": "CDL Driver 117",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON167",
    "name": "CDL Driver 167",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON119",
    "name": "CDL Driver 119",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON120",
    "name": "CDL Driver 120",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON121",
    "name": "CDL Driver 121",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON003",
    "name": "CDL Driver 003",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON004",
    "name": "CDL Driver 004",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON005",
    "name": "CDL Driver 005",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON006",
    "name": "CDL Driver 006",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON007",
    "name": "CDL Driver 007",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON122",
    "name": "CDL Driver 122",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON008",
    "name": "CDL Driver 008",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON148",
    "name": "CDL Driver 148",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON149",
    "name": "CDL Driver 149",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON123",
    "name": "CDL Driver 123",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON124",
    "name": "CDL Driver 124",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON012",
    "name": "CDL Driver 012",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON150",
    "name": "CDL Driver 150",
    "departmentId": "070708",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON014",
    "name": "CDL Driver 014",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON015",
    "name": "CDL Driver 015",
    "departmentId": "070701",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON017",
    "name": "CDL Driver 017",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON018",
    "name": "CDL Driver 018",
    "departmentId": "070702",
    "date": "2026-05-05",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON019",
    "name": "CDL Driver 019",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON151",
    "name": "CDL Driver 151",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON020",
    "name": "CDL Driver 020",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON021",
    "name": "CDL Driver 021",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON125",
    "name": "CDL Driver 125",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON022",
    "name": "CDL Driver 022",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON023",
    "name": "CDL Driver 023",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON024",
    "name": "CDL Driver 024",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON025",
    "name": "CDL Driver 025",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON126",
    "name": "CDL Driver 126",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON127",
    "name": "CDL Driver 127",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON029",
    "name": "CDL Driver 029",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON030",
    "name": "CDL Driver 030",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON128",
    "name": "CDL Driver 128",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON152",
    "name": "CDL Driver 152",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON034",
    "name": "CDL Driver 034",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON129",
    "name": "CDL Driver 129",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON035",
    "name": "CDL Driver 035",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON153",
    "name": "CDL Driver 153",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON038",
    "name": "CDL Driver 038",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON130",
    "name": "CDL Driver 130",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON040",
    "name": "CDL Driver 040",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON041",
    "name": "CDL Driver 041",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON042",
    "name": "CDL Driver 042",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON043",
    "name": "CDL Driver 043",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON131",
    "name": "CDL Driver 131",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON044",
    "name": "CDL Driver 044",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON045",
    "name": "CDL Driver 045",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON046",
    "name": "CDL Driver 046",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON154",
    "name": "CDL Driver 154",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON132",
    "name": "CDL Driver 132",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON133",
    "name": "CDL Driver 133",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON050",
    "name": "CDL Driver 050",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON052",
    "name": "CDL Driver 052",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON054",
    "name": "CDL Driver 054",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON055",
    "name": "CDL Driver 055",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON056",
    "name": "CDL Driver 056",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON134",
    "name": "CDL Driver 134",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON058",
    "name": "CDL Driver 058",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON155",
    "name": "CDL Driver 155",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON135",
    "name": "CDL Driver 135",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON060",
    "name": "CDL Driver 060",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON061",
    "name": "CDL Driver 061",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON062",
    "name": "CDL Driver 062",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON063",
    "name": "CDL Driver 063",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON064",
    "name": "CDL Driver 064",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON156",
    "name": "CDL Driver 156",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON067",
    "name": "CDL Driver 067",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON068",
    "name": "CDL Driver 068",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON069",
    "name": "CDL Driver 069",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON070",
    "name": "CDL Driver 070",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON157",
    "name": "CDL Driver 157",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON158",
    "name": "CDL Driver 158",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON136",
    "name": "CDL Driver 136",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON074",
    "name": "CDL Driver 074",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON075",
    "name": "CDL Driver 075",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON076",
    "name": "CDL Driver 076",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON077",
    "name": "CDL Driver 077",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON137",
    "name": "CDL Driver 137",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON159",
    "name": "CDL Driver 159",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON079",
    "name": "CDL Driver 079",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON081",
    "name": "CDL Driver 081",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON160",
    "name": "CDL Driver 160",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON161",
    "name": "CDL Driver 161",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON083",
    "name": "CDL Driver 083",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON086",
    "name": "CDL Driver 086",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON162",
    "name": "CDL Driver 162",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON138",
    "name": "CDL Driver 138",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON087",
    "name": "CDL Driver 087",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON139",
    "name": "CDL Driver 139",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON088",
    "name": "CDL Driver 088",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON089",
    "name": "CDL Driver 089",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON091",
    "name": "CDL Driver 091",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON140",
    "name": "CDL Driver 140",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON141",
    "name": "CDL Driver 141",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON142",
    "name": "CDL Driver 142",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON096",
    "name": "CDL Driver 096",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON098",
    "name": "CDL Driver 098",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON143",
    "name": "CDL Driver 143",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON101",
    "name": "CDL Driver 101",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON144",
    "name": "CDL Driver 144",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON102",
    "name": "CDL Driver 102",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON163",
    "name": "CDL Driver 163",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON164",
    "name": "CDL Driver 164",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON105",
    "name": "CDL Driver 105",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "ANON145",
    "name": "CDL Driver 145",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON107",
    "name": "CDL Driver 107",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON165",
    "name": "CDL Driver 165",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON146",
    "name": "CDL Driver 146",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON108",
    "name": "CDL Driver 108",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON110",
    "name": "CDL Driver 110",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON166",
    "name": "CDL Driver 166",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON113",
    "name": "CDL Driver 113",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON116",
    "name": "CDL Driver 116",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON147",
    "name": "CDL Driver 147",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON117",
    "name": "CDL Driver 117",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON167",
    "name": "CDL Driver 167",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON119",
    "name": "CDL Driver 119",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON120",
    "name": "CDL Driver 120",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON001",
    "name": "CDL Driver 001",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON002",
    "name": "CDL Driver 002",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON003",
    "name": "CDL Driver 003",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON004",
    "name": "CDL Driver 004",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON005",
    "name": "CDL Driver 005",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON006",
    "name": "CDL Driver 006",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON007",
    "name": "CDL Driver 007",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON008",
    "name": "CDL Driver 008",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON148",
    "name": "CDL Driver 148",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON149",
    "name": "CDL Driver 149",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON011",
    "name": "CDL Driver 011",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON012",
    "name": "CDL Driver 012",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON150",
    "name": "CDL Driver 150",
    "departmentId": "070708",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON014",
    "name": "CDL Driver 014",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON015",
    "name": "CDL Driver 015",
    "departmentId": "070701",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON017",
    "name": "CDL Driver 017",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON018",
    "name": "CDL Driver 018",
    "departmentId": "070702",
    "date": "2026-05-06",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON019",
    "name": "CDL Driver 019",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "01:30",
    "shiftEnd": "10:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON151",
    "name": "CDL Driver 151",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON020",
    "name": "CDL Driver 020",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON021",
    "name": "CDL Driver 021",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON022",
    "name": "CDL Driver 022",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON023",
    "name": "CDL Driver 023",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON024",
    "name": "CDL Driver 024",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON025",
    "name": "CDL Driver 025",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON027",
    "name": "CDL Driver 027",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "02:30",
    "shiftEnd": "11:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON029",
    "name": "CDL Driver 029",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON030",
    "name": "CDL Driver 030",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON031",
    "name": "CDL Driver 031",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON152",
    "name": "CDL Driver 152",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON034",
    "name": "CDL Driver 034",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON035",
    "name": "CDL Driver 035",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON153",
    "name": "CDL Driver 153",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON038",
    "name": "CDL Driver 038",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON039",
    "name": "CDL Driver 039",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON040",
    "name": "CDL Driver 040",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON041",
    "name": "CDL Driver 041",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON042",
    "name": "CDL Driver 042",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON043",
    "name": "CDL Driver 043",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON044",
    "name": "CDL Driver 044",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON045",
    "name": "CDL Driver 045",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON046",
    "name": "CDL Driver 046",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON047",
    "name": "CDL Driver 047",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON048",
    "name": "CDL Driver 048",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON154",
    "name": "CDL Driver 154",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "04:00",
    "shiftEnd": "12:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON049",
    "name": "CDL Driver 049",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON050",
    "name": "CDL Driver 050",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "05:00",
    "shiftEnd": "13:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON052",
    "name": "CDL Driver 052",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON054",
    "name": "CDL Driver 054",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "05:30",
    "shiftEnd": "14:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON055",
    "name": "CDL Driver 055",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON056",
    "name": "CDL Driver 056",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON057",
    "name": "CDL Driver 057",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:00",
    "shiftEnd": "14:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON058",
    "name": "CDL Driver 058",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON155",
    "name": "CDL Driver 155",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON059",
    "name": "CDL Driver 059",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON060",
    "name": "CDL Driver 060",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON061",
    "name": "CDL Driver 061",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON062",
    "name": "CDL Driver 062",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON063",
    "name": "CDL Driver 063",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON064",
    "name": "CDL Driver 064",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON156",
    "name": "CDL Driver 156",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "06:30",
    "shiftEnd": "15:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON067",
    "name": "CDL Driver 067",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON068",
    "name": "CDL Driver 068",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON069",
    "name": "CDL Driver 069",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "07:00",
    "shiftEnd": "15:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON070",
    "name": "CDL Driver 070",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON157",
    "name": "CDL Driver 157",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON071",
    "name": "CDL Driver 071",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON158",
    "name": "CDL Driver 158",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON073",
    "name": "CDL Driver 073",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON074",
    "name": "CDL Driver 074",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON075",
    "name": "CDL Driver 075",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON076",
    "name": "CDL Driver 076",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "08:30",
    "shiftEnd": "17:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON077",
    "name": "CDL Driver 077",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON159",
    "name": "CDL Driver 159",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON078",
    "name": "CDL Driver 078",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON079",
    "name": "CDL Driver 079",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON080",
    "name": "CDL Driver 080",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON081",
    "name": "CDL Driver 081",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON160",
    "name": "CDL Driver 160",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON161",
    "name": "CDL Driver 161",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON083",
    "name": "CDL Driver 083",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON084",
    "name": "CDL Driver 084",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON085",
    "name": "CDL Driver 085",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON086",
    "name": "CDL Driver 086",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON162",
    "name": "CDL Driver 162",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON087",
    "name": "CDL Driver 087",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON088",
    "name": "CDL Driver 088",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON089",
    "name": "CDL Driver 089",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON090",
    "name": "CDL Driver 090",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON091",
    "name": "CDL Driver 091",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "11:00",
    "shiftEnd": "19:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON093",
    "name": "CDL Driver 093",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON094",
    "name": "CDL Driver 094",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "12:00",
    "shiftEnd": "20:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON096",
    "name": "CDL Driver 096",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON097",
    "name": "CDL Driver 097",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON098",
    "name": "CDL Driver 098",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON100",
    "name": "CDL Driver 100",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON101",
    "name": "CDL Driver 101",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON102",
    "name": "CDL Driver 102",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON163",
    "name": "CDL Driver 163",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON164",
    "name": "CDL Driver 164",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "13:00",
    "shiftEnd": "21:30",
    "hours": 8.5
  },
  {
    "employeeId": "ANON105",
    "name": "CDL Driver 105",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "14:00",
    "shiftEnd": "23:00",
    "hours": 9
  },
  {
    "employeeId": "ANON106",
    "name": "CDL Driver 106",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON107",
    "name": "CDL Driver 107",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON165",
    "name": "CDL Driver 165",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON108",
    "name": "CDL Driver 108",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON109",
    "name": "CDL Driver 109",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON110",
    "name": "CDL Driver 110",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON166",
    "name": "CDL Driver 166",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON113",
    "name": "CDL Driver 113",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON116",
    "name": "CDL Driver 116",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON117",
    "name": "CDL Driver 117",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON118",
    "name": "CDL Driver 118",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON167",
    "name": "CDL Driver 167",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON119",
    "name": "CDL Driver 119",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON120",
    "name": "CDL Driver 120",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "14:30",
    "shiftEnd": "23:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON001",
    "name": "CDL Driver 001",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON002",
    "name": "CDL Driver 002",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON003",
    "name": "CDL Driver 003",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON004",
    "name": "CDL Driver 004",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON005",
    "name": "CDL Driver 005",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON006",
    "name": "CDL Driver 006",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON007",
    "name": "CDL Driver 007",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON008",
    "name": "CDL Driver 008",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON009",
    "name": "CDL Driver 009",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON010",
    "name": "CDL Driver 010",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "16:30",
    "shiftEnd": "25:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON011",
    "name": "CDL Driver 011",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON012",
    "name": "CDL Driver 012",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON013",
    "name": "CDL Driver 013",
    "departmentId": "070708",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON014",
    "name": "CDL Driver 014",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON015",
    "name": "CDL Driver 015",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON016",
    "name": "CDL Driver 016",
    "departmentId": "070701",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON017",
    "name": "CDL Driver 017",
    "departmentId": "070702",
    "date": "2026-05-07",
    "shiftStart": "18:30",
    "shiftEnd": "27:00",
    "hours": 8.5
  },
  {
    "employeeId": "ANON018",
    "name": "CDL Driver 018",
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