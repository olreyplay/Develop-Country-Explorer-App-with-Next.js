import Link from "next/link";
import { getCountryByCode, getCountriesByCodes } from "@/lib/countries";

type CountryPageProps = {
  params: Promise<{
    code: string;
  }>;
};

export default async function CountryPage({ params }: CountryPageProps) {
  const { code } = await params;
  const country = await getCountryByCode(code);

  const borderCountries =
    country.borders && country.borders.length > 0
      ? await getCountriesByCodes(country.borders)
      : [];

  return (
    <main className="mx-auto max-w-5xl p-6">
      <Link
        href="/"
        className="inline-flex rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-white transition "
      >
        Back To Home
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
        <img
          src={country.flags.svg}
          alt={country.flags.alt || `${country.name.common} flag`}
          className="w-full rounded-xl border border-gray-200 shadow-sm"
        />

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {country.name.common}
          </h1>

          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">Capital:</span>{" "}
              {country.capital?.[0] || "N/A"}
            </p>

            <p>
              <span className="font-semibold text-gray-900">Region:</span>{" "}
              {country.region}
            </p>

            <p>
              <span className="font-semibold text-gray-900">Subregion:</span>{" "}
              {country.subregion || "N/A"}
            </p>

            <p>
              <span className="font-semibold text-gray-900">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>

            <p>
              <span className="font-semibold text-gray-900">Area:</span>{" "}
              {country.area.toLocaleString()} km²
            </p>

            <p>
              <span className="font-semibold text-gray-900">Languages:</span>{" "}
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "N/A"}
            </p>

            <p>
              <span className="font-semibold text-gray-900">Currencies:</span>{" "}
              {country.currencies
                ? Object.values(country.currencies)
                    .map((c: any) => c.name)
                    .join(", ")
                : "N/A"}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Border Countries
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {borderCountries.length > 0 ? (
                borderCountries.map((border: any) => (
                  <Link
                    key={border.cca3}
                    href={`/country/${border.cca3}`}
                    className="rounded-md border border-gray-900 text-black px-3 py-1 text-sm transition"
                  >
                    {border.name.common}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-600">No bordering countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
