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
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold text-gray-900">
        {country.name.common}
      </h1>

      <p className="mt-2 text-gray-600">
        This is the details page for {country.name.common}.
      </p>
    </main>
  );
}
