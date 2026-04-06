import Link from "next/link";

type CountryCardProps = {
  country: {
    cca3: string;
    name: {
      common: string;
    };
    flags: {
      svg: string;
      alt?: string;
    };
    population: number;
    region: string;
    capital?: string[];
  };
};

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      href={`/country/${country.cca3}`}
      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <img
        src={country.flags.svg}
        alt={country.flags.alt || `${country.name.common} flag`}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {country.name.common}
        </h2>

        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium text-gray-900">Capital:</span>{" "}
            {country.capital?.[0] || "N/A"}
          </p>

          <p>
            <span className="font-medium text-gray-900">Region:</span>{" "}
            {country.region}
          </p>

          <p>
            <span className="font-medium text-gray-900">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
