export interface Announcement { title: string; message: string; date: string; category: 'Important' | 'Travel' | 'Team' }
export const announcements: Announcement[] = [
  { title: 'Welcome to Retreat 2026!', message: 'We are so excited to spend four unforgettable days together. Keep an eye here for every important update.', date: 'Today · 10:00 AM', category: 'Important' }, { title: 'Bus 03 boarding reminder', message: 'Please arrive at the Chennai boarding point by 7:30 AM on December 27.', date: 'Yesterday · 05:30 PM', category: 'Travel' }, { title: 'Team colours are in!', message: 'Spartans, bring something purple for the opening celebration.', date: 'Yesterday · 01:15 PM', category: 'Team' },
]
