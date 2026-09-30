import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "../layout/SectionWrapper";
export default function FinalCTA() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-navy text-white">
      <div className="absolute right-[-8%] top-[-35%] h-[500px] w-[500px] rounded-full bg-blue/15 blur-3xl" />
      <div className="container-shell relative grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
        <div>
          <p className="section-kicker text-blue-300">Let's work together</p>
          <h2 className="display-font mt-2 text-5xl font-semibold leading-none sm:text-6xl">
            Let's build something great.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
            Tell me what you're trying to build and let's turn the idea into a
            working product.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-semibold"
            >
              Start a Project <ArrowUpRight size={16} />
            </Link>
            <a
              href="https://wa.me/2349024285360"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold"
            >
              <MessageCircle size={16} /> WhatsApp Me
            </a>
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <p className="text-sm font-semibold">Have a project in mind?</p>
          <p className="mt-2 text-xs leading-5 text-white/50">
            Start with a brief. No account required. We'll define the scope,
            priorities and next steps together.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-blue-200">
            Quick response during working hours <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
