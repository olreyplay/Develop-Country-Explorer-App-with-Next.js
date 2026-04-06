"use client";

type RegionFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RegionFilter({ value, onChange }: RegionFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-gray-300p-3 p-1 text-sm outline-none focus:border-black"
    >
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
