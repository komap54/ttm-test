// встреча расписания
export interface IMeetingTable {
  Id: number,
  UserId: number,
  Title?: string,
  CreatedAt: Date,
  LastUpdatedAt: Date,
  TimeStart: string,
  TimeEnd: string,
  Notation?: string,
  InCome?: number, 
  IdTemplate?: number,
  IsCanled?: boolean 
  Client: string,
  place?: string,
  DayWeek?: number,
}

// встреча шаблона
export interface IMeetingTemplate {
  Id: number,
  UserId: number,
  CreatedAt: Date,
  LastUpdatedAt: Date,
  Title?: string,
  PeriodDateStart: Date,
  PeriodDateEnd: Date,
  MeetingTimeStart: string,
  MeetingTimeEnd: string,
  DayWeek: number,
  Type?: string,
  Notation?: string,
  InCome?: number, 
  Client: string,
  place?: string,
}

// пользователь
export interface IUser {
  isLogin: boolean
  id: number,
  login: string,
  name: string,
  surname: string
} 