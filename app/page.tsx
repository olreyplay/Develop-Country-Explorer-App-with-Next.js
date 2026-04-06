import CountryCard from "@/components/CountryCard";
import { getCountries } from "@/lib/countries";

export default async function Home() {
  const countries = await getCountries();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold">Country Explorer</h1>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country: any) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
}
