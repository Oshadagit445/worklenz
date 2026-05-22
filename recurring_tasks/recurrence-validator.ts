import { RecurrenceConfig } from '../types/recurrence.types';

export const validateRecurrence = (
  config: RecurrenceConfig
): string[] => {
  const errors: string[] = [];

  if (config.interval < 1) {
    errors.push(
      'Interval must be greater than 0'
    );
  }

  if (
    config.frequency === 'WEEKLY' &&
    (!config.weekDays ||
      config.weekDays.length === 0)
  ) {
    errors.push(
      'Select at least one weekday'
    );
  }

  return errors;
};