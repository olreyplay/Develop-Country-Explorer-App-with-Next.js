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
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,population,region,subregion,capital,languages,currencies,area,cca3,borders`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch country");
  }

  const data = await res.json();

  if (!data) {
    throw new Error("Country not found");
  }

  return data;
}
