import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";

export default function Trust() {
  return (
    <SectionWrapper className="bg-ivory pt-8 lg:pt-16">
      <div className="rounded-3xl border border-ivory-border bg-white/30 p-7 sm:p-10">
        <SectionLabel>Selected Experience</SectionLabel>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-3xl">Purposeful</div>
            <p className="mt-2 text-sm leading-6 text-muted">
              Every section has a job: explain, prove, reassure or convert.
            </p>
          </div>
          <div>
            <div className="font-display text-3xl">Responsive</div>
            <p className="mt-2 text-sm leading-6 text-muted">
              Interfaces are designed for real users across mobile, tablet and
              desktop.
            </p>
          </div>
          <div>
            <div className="font-display text-3xl">Maintainable</div>
            <p className="mt-2 text-sm leading-6 text-muted">
              Components and content structures are built to evolve with the
              product.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
