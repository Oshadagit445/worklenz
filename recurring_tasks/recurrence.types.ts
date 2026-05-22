export enum RecurrenceFrequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
}

export interface RecurrenceConfig {
  enabled: boolean;

  frequency: RecurrenceFrequency;

  interval: number;

  weekDays?: number[];

  monthlyType?: 'DATE' | 'WEEKDAY';

  endType?: 'NEVER' | 'ON_DATE' | 'AFTER_OCCURRENCES';

  endDate?: string;

  occurrences?: number;

  startDate: string;
}