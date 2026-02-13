import { cn } from '@/lib/utils';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterChip = ({ label, isActive, onClick }: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 text-sm font-medium rounded transition-all duration-200 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
        'font-mono tracking-wide',
        isActive
          ? 'bg-accent text-accent-foreground shadow-md'
          : 'bg-card text-foreground border border-border/20 hover:border-accent/50 hover:bg-accent/5'
      )}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

export default FilterChip;
