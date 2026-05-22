import { useMemo } from 'react';

import { buildRecurrenceSummary } from '../utils/recurrence-summary';
import { RecurrenceConfig } from '../types/recurrence.types';

export const useRecurrence = (
  config: RecurrenceConfig
) => {
  const summary = useMemo(() => {
    return buildRecurrenceSummary(config);
  }, [config]);

  return {
    summary,
  };
};