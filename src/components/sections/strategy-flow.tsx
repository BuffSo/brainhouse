'use client';

export function StrategyFlow({ steps }: { steps: string[] }) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl bg-white p-3 sm:p-4 md:p-6 shadow-sm ring-1 ring-slate-200">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent" />

      {/* Flow Diagram */}
      <div className="relative z-10">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:gap-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col items-center gap-3 sm:gap-4 md:flex-row md:gap-2"
            >
              {/* Box */}
              <div className="flex h-16 sm:h-20 md:h-24 lg:h-28 w-full flex-col items-center justify-center rounded-lg sm:rounded-xl bg-white p-2 sm:p-3 md:p-4 text-center shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-blue-200 md:w-full">
                <div className="mb-1 sm:mb-1.5 md:mb-2 flex h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-blue-100 text-[10px] sm:text-xs font-bold text-blue-600">
                  {index + 1}
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-900 leading-tight">
                  {step}
                </span>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center text-slate-300 md:-mx-1">
                  {/* Mobile Arrow (Down) */}
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6 md:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  {/* Desktop Arrow (Right) */}
                  <svg
                    className="hidden h-6 w-6 md:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
