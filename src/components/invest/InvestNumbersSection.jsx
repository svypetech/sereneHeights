import { investNumbersSection } from "@/utils/constants/investContent";

function BreakdownRow({ label, value, highlight, alert }) {
  if (alert) {
    return (
      <div className="flex items-center justify-between gap-6 pt-6 mt-6 border-t border-[#37584F]/15">
        <span className="text-sm font-semibold text-[#37584F] gravesendSans">
          {label}
        </span>
        <span className="text-xl md:text-2xl font-bold text-[#37584F] gravesendSans text-right shrink-0">
          {value}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-6 py-2.5">
      <span
        className={`text-sm inter leading-relaxed ${
          highlight ? "text-[#37584F]" : "text-[#475467]"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-sm md:text-base text-right shrink-0 gravesendSans ${
          highlight ? "font-bold text-[#37584F]" : "font-semibold text-[#101828]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function BreakdownCard({ sections }) {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0px_0px_4px_1px_#0000001F] h-full">
      {sections.map((section, sectionIndex) => (
        <div key={section.title} className={sectionIndex > 0 ? "mt-10" : ""}>
          <h3 className="text-xl font-bold text-[#37584F] gravesendSans mb-1">
            {section.title}
          </h3>
          <div>
            {section.rows.map((row) => (
              <BreakdownRow key={row.label} {...row} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function InvestNumbersSection() {
  const { h2, intro, leftColumn, rightColumn } = investNumbersSection;

  return (
    <section className="px-6 md:px-16 lg:px-36 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#37584F] gravesendSans text-center mb-4">
          {h2}
        </h2>
        <p className="text-[#475467] inter text-center mb-12 max-w-2xl mx-auto">
          {intro}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BreakdownCard sections={leftColumn.sections} />
          <BreakdownCard sections={rightColumn.sections} />
        </div>
      </div>
    </section>
  );
}

export default InvestNumbersSection;
