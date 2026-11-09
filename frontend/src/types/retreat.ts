export interface Attendee {
  Full_Name: string;
  Mobile_Number: string;
  Region: 'North' | 'West' | 'Central lights' | 'Central hights' | string;
  Team: string;
  Role: string;
  Bus_No: string;
  Stay_Type: 'Room' | 'Dorm' | string;
  Stay_Number: string;
  Category: string;
  Status: string;
}

export interface ScheduleItem {
  Day: string;
  Date: string;
  Time: string;
  Title: string;
  Location: string;
  Category: 'meal' | 'music' | 'games' | 'session' | 'travel' | string;
  Description: string;
}

export interface TeamScore {
  Rank: string;
  Team_Name: string;
  Points: string;
  Color_Hex: string;
  Captain: string;
  Total_Games_Played: string;
}

export interface Announcement {
  ID: string;
  Title: string;
  Message: string;
  Category: string;
  Pinned: string;
  Timestamp: string;
}

export interface Song {
  Song_Number: string;
  Title: string;
  Language: string;
  Key: string;
  Category: string;
  Lyrics: string;
}

export interface ConfigItem {
  Setting_Key: string;
  Setting_Value: string;
  Description: string;
}