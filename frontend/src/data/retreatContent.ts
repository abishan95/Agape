import { announcements } from './announcements'
import { retreatGames, teamScores } from './games'
import { demoParticipant } from './participant'
import { retreatDays } from './schedule'
import { retreatSongs } from './songs'
import type { RetreatContent } from '../types/content'
import type { Participant } from '../types/participant'

// This is the single local source of truth until Google Sheets/API is connected.
// Replace these helpers' local reads/writes with remote calls later; page components stay unchanged.
export const retreatContent: RetreatContent = {
  participants: [demoParticipant],
  announcements,
  songs: retreatSongs,
  teamScores,
  games: retreatGames,
  schedule: retreatDays,
}

export function findParticipantByMobile(mobile: string): Participant | undefined {
  return retreatContent.participants.find((participant) => participant.mobile === mobile)
}

export function getLatestAnnouncement() {
  return retreatContent.announcements[0]
}

export function addAnnouncement(title: string, message: string, category: 'Important' | 'Travel' | 'Team') {
  retreatContent.announcements.unshift({ title, message, category, date: 'Just now' })
}

export function updateTeamScore(team: string, score: number) {
  const entry = retreatContent.teamScores.find((item) => item.team === team)
  if (entry) entry.score = score
}
