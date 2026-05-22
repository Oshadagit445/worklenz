import {
  RecurrenceConfig,
  RecurrenceFrequency,
} from '../types/recurrence.types';

export const generateNextOccurrence = (
  currentDate: Date,
  config: RecurrenceConfig
): Date => {
  const next = new Date(currentDate);

  switch (config.frequency) {
    case RecurrenceFrequency.DAILY:
      next.setDate(
        next.getDate() + config.interval
      );
      break;

    case RecurrenceFrequency.WEEKLY:
      next.setDate(
        next.getDate() +
          config.interval * 7
      );
      break;

    case RecurrenceFrequency.MONTHLY:
      next.setMonth(
        next.getMonth() +
          config.interval
      );
      break;
  }

  return next;
};