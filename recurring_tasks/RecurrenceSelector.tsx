import React, { memo } from 'react';

import {
  RecurrenceConfig,
  RecurrenceFrequency,
} from '../types/recurrence.types';

interface Props {
  value: RecurrenceConfig;
  onChange: (value: RecurrenceConfig) => void;
}

const weekDays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

const RecurrenceSelector: React.FC<Props> = memo(
  ({ value, onChange }) => {
    const updateField = (
      field: keyof RecurrenceConfig,
      fieldValue: any
    ) => {
      onChange({
        ...value,
        [field]: fieldValue,
      });
    };

    return (
      <div className="space-y-4 border rounded-xl p-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">
            Recurring Task
          </span>

          <input
            type="checkbox"
            checked={value.enabled}
            onChange={e =>
              updateField('enabled', e.target.checked)
            }
          />
        </div>

        {value.enabled && (
          <>
            <div>
              <label className="block text-sm mb-1">
                Frequency
              </label>

              <select
                className="w-full border rounded-lg p-2"
                value={value.frequency}
                onChange={e =>
                  updateField(
                    'frequency',
                    e.target.value as RecurrenceFrequency
                  )
                }
              >
                <option value={RecurrenceFrequency.DAILY}>
                  Daily
                </option>

                <option value={RecurrenceFrequency.WEEKLY}>
                  Weekly
                </option>

                <option value={RecurrenceFrequency.MONTHLY}>
                  Monthly
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">
                Repeat Every
              </label>

              <input
                type="number"
                min={1}
                className="w-full border rounded-lg p-2"
                value={value.interval}
                onChange={e =>
                  updateField(
                    'interval',
                    Number(e.target.value)
                  )
                }
              />
            </div>

            {value.frequency ===
              RecurrenceFrequency.WEEKLY && (
              <div>
                <label className="block text-sm mb-2">
                  Repeat On
                </label>

                <div className="flex gap-2 flex-wrap">
                  {weekDays.map((day, index) => {
                    const active =
                      value.weekDays?.includes(index);

                    return (
                      <button
                        key={day}
                        type="button"
                        className={`px-3 py-2 rounded-full border ${
                          active
                            ? 'bg-blue-500 text-white'
                            : ''
                        }`}
                        onClick={() => {
                          const existing =
                            value.weekDays || [];

                          const updated =
                            active
                              ? existing.filter(
                                  d => d !== index
                                )
                              : [...existing, index];

                          updateField(
                            'weekDays',
                            updated
                          );
                        }}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm mb-1">
                Ends
              </label>

              <select
                className="w-full border rounded-lg p-2"
                value={value.endType}
                onChange={e =>
                  updateField(
                    'endType',
                    e.target.value
                  )
                }
              >
                <option value="NEVER">
                  Never
                </option>

                <option value="ON_DATE">
                  On Date
                </option>

                <option value="AFTER_OCCURRENCES">
                  After Occurrences
                </option>
              </select>
            </div>

            {value.endType === 'ON_DATE' && (
              <input
                type="date"
                className="w-full border rounded-lg p-2"
                value={value.endDate || ''}
                onChange={e =>
                  updateField(
                    'endDate',
                    e.target.value
                  )
                }
              />
            )}

            {value.endType ===
              'AFTER_OCCURRENCES' && (
              <input
                type="number"
                min={1}
                className="w-full border rounded-lg p-2"
                value={value.occurrences || 1}
                onChange={e =>
                  updateField(
                    'occurrences',
                    Number(e.target.value)
                  )
                }
              />
            )}
          </>
        )}
      </div>
    );
  }
);

RecurrenceSelector.displayName =
  'RecurrenceSelector';

export default RecurrenceSelector;