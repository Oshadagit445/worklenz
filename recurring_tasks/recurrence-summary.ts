import {
  RecurrenceConfig,
  RecurrenceFrequency,
} from '../types/recurrence.types';

export const buildRecurrenceSummary = (
  config: RecurrenceConfig
): string => {
  if (!config.enabled) return 'Does not repeat';

  switch (config.frequency) {
    case RecurrenceFrequency.DAILY:
      return `Repeats every ${config.interval} day(s)`;

    case RecurrenceFrequency.WEEKLY:
      return `Repeats every ${config.interval} week(s)`;

    case RecurrenceFrequency.MONTHLY:
      return `Repeats every ${config.interval} month(s)`;

    default:
      return 'Custom recurrence';
  }
};