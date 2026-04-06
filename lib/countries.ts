export async function getCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return res.json();
}

export async function getCountryByCode(code: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

  if (!res.ok) {
    throw new Error("Failed to fetch country");
  }

  const data = await res.json();
  return data[0];
}
