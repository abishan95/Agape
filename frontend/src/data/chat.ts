export interface ChatMessage { id: number; name: string; message: string; time: string; avatar: string; color: string }
export const demoMessages: ChatMessage[] = [
  { id: 1, name: 'Rachel', message: 'Spartans, are we ready for tomorrow? ⚡', time: '10:42 AM', avatar: 'R', color: '#f6bf80' },
  { id: 2, name: 'Joel', message: 'Absolutely! Don’t forget your team colours.', time: '10:44 AM', avatar: 'J', color: '#c7b7ef' },
  { id: 3, name: 'Anitha', message: 'Can’t wait for the worship night ✨', time: '10:48 AM', avatar: 'A', color: '#bde3c5' },
]
