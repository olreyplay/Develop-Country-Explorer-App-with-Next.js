"use client";

type SortSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-gray-300  p-1 text-sm outline-none focus:border-black"
    >
      <option value="">No Sorting</option>
      <option value="name">Name (A-Z)</option>
      <option value="population">Population (High to Low)</option>
    </select>
  );
}
