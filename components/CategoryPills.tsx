'use client';

interface CategoryPillsProps {
  selected?: string | null;
  onChange?: (category: string | null) => void;
}

const CATEGORIES = [
  { id: 'prompt', label: 'Prompts', icon: '💬' },
  { id: 'skill', label: 'Skills', icon: '🛠️' },
  { id: 'workflow', label: 'Workflows', icon: '⚙️' },
  { id: 'agent', label: 'Agents', icon: '🤖' },
  { id: 'plugin', label: 'Plugins', icon: '🔌' },
  { id: 'template', label: 'Templates', icon: '📄' },
];

export function CategoryPills({ selected, onChange }: CategoryPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange?.(null)}
        className={`px-4 py-2 rounded-full font-medium transition-all ${
          selected === null
            ? 'bg-primary-600 text-white'
            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
        }`}
      >
        All
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange?.(category.id)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            selected === category.id
              ? 'bg-primary-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
}
