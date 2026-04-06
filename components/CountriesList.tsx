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

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <SearchInput value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries.map((country: any) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
