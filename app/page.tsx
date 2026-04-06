import CountryCard from "@/components/CountryCard";
import { getCountries } from "@/lib/countries";

export default async function Home() {
  const countries = await getCountries();

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">Country Explorer</h1>

      <div className="mt-6 space-y-4">
        {countries.map((country: any) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
}
