"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";
import SearchInput from "./SearchInput";

export default function CountriesList({ countries }: any) {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country: any) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mt-6">
      <SearchInput value={search} onChange={setSearch} />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries.map((country: any) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
