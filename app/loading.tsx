export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold">Country Explorer</h1>

      <div className="mt-6">
        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="h-12 w-full rounded-md border border-gray-300 bg-gray-100 animate-pulse" />

            <div className="h-12 w-full rounded-md border border-gray-300 bg-gray-100 animate-pulse" />

            <div className="h-12 w-full rounded-md border border-gray-300 bg-gray-100 animate-pulse" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-white animate-pulse">
              Loading countries...
            </p>

            <div className="h-8 w-16 rounded-md border border-gray-300 bg-gray-100 animate-pulse" />
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="min-w-70 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="h-40 w-full bg-gray-200 animate-pulse" />

              <div className="p-4">
                <div className="h-6 w-3/4 rounded bg-gray-200 animate-pulse" />

                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                  <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
                  <div className="h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
