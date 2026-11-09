export interface Participant {
  name: string;
  mobile: string;
  phone?: string;
  bus: string;
  boardingPoint: string;
  room: string;
  dormitory: string;
  team: string;
  teamLeader: string;
}

export const demoParticipant: Participant = {
  name: 'Abishan Bose',
  mobile: '9876543210',
  bus: 'Bus 02',
  boardingPoint: 'Koyambedu CMBT (05:30 AM)',
  room: 'B-104',
  dormitory: 'Upper Camp Wing',
  team: 'Zion Warriors',
  teamLeader: 'Pastor Samuel',
};