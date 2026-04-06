import { getCountries } from "@/lib/countries";
import CountriesList from "@/components/CountriesList";

export default async function Home() {
  const countries = await getCountries();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold">Country Explorer</h1>

      <CountriesList countries={countries} />
    </main>
  );
}
