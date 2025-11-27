'use client';

interface Month {
  name: string;
  count: number;
}

interface PastRecordsProps {
  months: Month[];
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

const PastRecords = ({ months, selectedMonth, onMonthChange }: PastRecordsProps) => {
  return (
    <div>
      <h3 className="text-heading-5">Past records</h3>
      <div className="space-y-2 mt-2.5">
        <button
          onClick={() => onMonthChange('all')}
          className={`flex items-center justify-between py-1.5 text-tagline-1 w-full text-left transition-colors duration-300 ${
            selectedMonth === 'all' ? 'text-primary-500' : 'hover:text-primary-500 dark:text-accent'
          }`}>
          <span>All Time</span>
          <span>({months.reduce((sum, month) => sum + month.count, 0)})</span>
        </button>

        {months.map((month) => (
          <button
            key={month.name}
            onClick={() => onMonthChange(month.name)}
            className={`flex items-center justify-between py-1.5 text-tagline-1 w-full text-left transition-colors duration-300 ${
              selectedMonth === month.name ? 'text-primary-500' : 'hover:text-primary-500 dark:text-accent'
            }`}>
            <span>{month.name}</span>
            <span>({month.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PastRecords;
