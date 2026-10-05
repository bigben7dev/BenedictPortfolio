import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

export default function Trust() {
  return (
    <SectionWrapper
      className="
        bg-ivory
        pt-8
        text-dark-text
        transition-colors
        duration-300
        dark:bg-navy
        dark:text-white
        lg:pt-16
      "
    >
      <div
        className="
          rounded-3xl
          border
          border-border-warm
          bg-white/40
          p-7
          shadow-sm
          transition-all
          duration-300
          dark:border-white/10
          dark:bg-[#14202A]
          dark:shadow-none
          sm:p-10
        "
      >
        <SectionLabel>Selected Experience</SectionLabel>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {/* Purposeful */}
          <div>
            <div className="display-font text-3xl font-semibold">
              Purposeful
            </div>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-muted
                transition-colors
                duration-300
                dark:text-white/60
              "
            >
              Every section has a job: explain, prove, reassure or convert.
            </p>
          </div>

          {/* Responsive */}
          <div>
            <div className="display-font text-3xl font-semibold">
              Responsive
            </div>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-muted
                transition-colors
                duration-300
                dark:text-white/60
              "
            >
              Interfaces are designed for real users across mobile, tablet and
              desktop.
            </p>
          </div>

          {/* Maintainable */}
          <div>
            <div className="display-font text-3xl font-semibold">
              Maintainable
            </div>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-muted
                transition-colors
                duration-300
                dark:text-white/60
              "
            >
              Components and content structures are built to evolve with the
              product.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
