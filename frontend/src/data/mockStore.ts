export interface Attendee {
  Phone: string;
  Name: string;
  Bus: string;
  BusSeat: string;
  Room: string;
  Dorm: string;
  Team: string;
  IsSuperuser: boolean;

  id?: string;
  phone?: string;
  name?: string;
  bus?: string;
  busSeat?: string;
  room?: string;
  dorm?: string;
  team?: string;
  isSuperuser?: boolean;
}

export type Participant = Attendee;

export const mockStore: Attendee[] = [
  {
    Phone: '0000000001',
    Name: 'Retreat Guest',
    Bus: 'Yelagiri · 01',
    BusSeat: '12A',
    Room: 'Pine · 204',
    Dorm: 'Pine Wing · Room 204',
    Team: 'Cedar',
    IsSuperuser: false,
    phone: '0000000001',
    name: 'Retreat Guest',
    bus: 'Yelagiri · 01',
    busSeat: '12A',
    room: 'Pine · 204',
    dorm: 'Pine Wing · Room 204',
    team: 'Cedar',
    isSuperuser: false,
  },
  {
    Phone: '#7821',
    Name: 'Abishan (Superuser)',
    Bus: 'Yelagiri · 01',
    BusSeat: '01A',
    Room: 'Oak · 101',
    Dorm: 'Oak Wing · Room 101',
    Team: 'Zion Warriors',
    IsSuperuser: true,
    phone: '#7821',
    name: 'Abishan (Superuser)',
    bus: 'Yelagiri · 01',
    busSeat: '01A',
    room: 'Oak · 101',
    dorm: 'Oak Wing · Room 101',
    team: 'Zion Warriors',
    isSuperuser: true,
  },
  {
    Phone: '9840123456',
    Name: 'Lead Coordinator',
    Bus: 'Yelagiri · 01',
    BusSeat: '02A',
    Room: 'Oak · 102',
    Dorm: 'Oak Wing · Room 102',
    Team: 'Zion Warriors',
    IsSuperuser: true,
    phone: '9840123456',
    name: 'Lead Coordinator',
    bus: 'Yelagiri · 01',
    busSeat: '02A',
    room: 'Oak · 102',
    dorm: 'Oak Wing · Room 102',
    team: 'Zion Warriors',
    isSuperuser: true,
  },
];

export function getAttendees(): Attendee[] {
  return mockStore;
}

export function findAttendeeByPhone(phoneNumber: string): Attendee | null {
  const clean = phoneNumber.trim();
  const match = mockStore.find(
    (a) => a.Phone === clean || a.phone === clean
  );
  if (match) return match;

  if (clean.length >= 4) {
    const isSuper = clean === '#7821' || clean === 'admin';
    return {
      Phone: clean,
      Name: 'Retreat Guest',
      Bus: 'Yelagiri · 01',
      BusSeat: '12A',
      Room: 'Pine · 204',
      Dorm: 'Pine Wing · Room 204',
      Team: 'Cedar',
      IsSuperuser: isSuper,
      phone: clean,
      name: 'Retreat Guest',
      bus: 'Yelagiri · 01',
      busSeat: '12A',
      room: 'Pine · 204',
      dorm: 'Pine Wing · Room 204',
      team: 'Cedar',
      isSuperuser: isSuper,
    };
  }
  return null;
}

export const lookupParticipant = findAttendeeByPhone;