type FreshnessNoteProps = {
  date: string;
  label?: string;
};

export function FreshnessNote({ date, label = "Last reviewed" }: FreshnessNoteProps) {
  const parsed = new Date(date);
  const display = Number.isNaN(parsed.getTime())
    ? date
    : parsed.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return <p className="mt-3 text-xs text-slate-500">{label}: {display}</p>;
}
