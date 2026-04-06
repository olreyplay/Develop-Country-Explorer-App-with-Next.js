import { getCountries } from "@/lib/countries";

export default async function Home() {
  const countries = await getCountries();

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">Country Explorer</h1>

      <div className="mt-6 space-y-2">
        {countries.map((country: any) => (
          <div key={country.cca3} className="p-1 border rounded-md bg-white">
            <h2 className="text-l font-semibold text-gray-800">
              {country.name.common}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
