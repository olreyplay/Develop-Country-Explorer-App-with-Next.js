"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";
import SearchInput from "./SearchInput";
import RegionFilter from "./RegionFilter";
import SortSelect from "./SortSelect";

export default function CountriesList({ countries }: any) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [sort, setSort] = useState("");

  const filteredCountries = countries
    .filter((country: any) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesRegion = region === "" || country.region === region;

      return matchesSearch && matchesRegion;
    })
    .sort((a: any, b: any) => {
      if (sort === "name") {
        return a.name.common.localeCompare(b.name.common);
      }

      if (sort === "population") {
        return b.population - a.population;
      }

      return 0;
    });

  const handleReset = () => {
    setSearch("");
    setRegion("");
    setSort("");
  };

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4">
        <div className="grid gap-4 md:grid-cols-3">
          <SearchInput value={search} onChange={setSearch} />
          <RegionFilter value={region} onChange={setRegion} />
          <SortSelect value={sort} onChange={setSort} />
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-white">
            Showing {filteredCountries.length} countries
          </p>

          <button
            onClick={handleReset}
            className="rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-white transition "
          >
            Reset
          </button>
        </div>
      </div>

      {filteredCountries.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCountries.map((country: any) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            No Countries Found
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Try changing your search, region, or sorting options.
          </p>
        </div>
      )}
    </div>
  );
}
