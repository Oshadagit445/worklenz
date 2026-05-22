import React, { memo } from 'react';

interface Props {
  summary: string;
}

const RecurrenceSummary: React.FC<Props> = memo(
  ({ summary }) => {
    return (
      <div className="text-sm text-gray-500 mt-2">
        {summary}
      </div>
    );
  }
);

RecurrenceSummary.displayName =
  'RecurrenceSummary';

export default RecurrenceSummary;