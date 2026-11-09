import type { Announcement } from '../data/announcements'
import type { RetreatGame, TeamScore } from '../data/games'
import type { ScheduleItem } from '../data/schedule'
import type { RetreatSong } from '../data/songs'
import type { Participant } from './participant'

export interface RetreatContent {
  participants: Participant[]
  announcements: Announcement[]
  songs: RetreatSong[]
  teamScores: TeamScore[]
  games: RetreatGame[]
  schedule: { label: string; date: string; items: ScheduleItem[] }[]
}
