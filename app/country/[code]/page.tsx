import Link from "next/link";
import { getCountryByCode } from "@/lib/countries";

type CountryPageProps = {
  params: Promise<{
    code: string;
  }>;
};

export default async function CountryPage({ params }: CountryPageProps) {
  const { code } = await params;
  const country = await getCountryByCode(code);

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
                    .map((currency: any) => currency.name)
                    .join(", ")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
