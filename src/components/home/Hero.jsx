import { motion } from "framer-motion";
import { ArrowDown, PlayCircle } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import useReducedMotion from "../../hooks/useReducedMotion";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduced = useReducedMotion();
  const motionProps = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduced ? 0 : 0.65,
      delay: reduced ? 0 : delay,
      ease,
    },
  });

  return (
    <section className="noise relative min-h-[760px] overflow-hidden bg-navy text-white lg:min-h-[860px]">
      <div className="hero-grid pointer-events-none absolute inset-0 z-0 opacity-60" />
      <motion.div
        aria-hidden="true"
        animate={reduced ? {} : { x: [0, 30, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb pointer-events-none absolute -right-20 top-10 z-0 h-[620px] w-[620px] rounded-full"
      />

      <div className="container-shell relative z-10 flex min-h-[760px] items-end pb-14 pt-32 lg:min-h-[860px] lg:pb-20">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative z-30 max-w-[680px]">
            <motion.div {...motionProps(0)}>
              <Badge>Tailoring Exceptional Web solution</Badge>
            </motion.div>

            <motion.h1
              {...motionProps(0.08)}
              className="display-font mt-7 max-w-[720px] text-5xl font-semibold leading-[.92] tracking-[-.03em] sm:text-6xl lg:text-[76px]"
            >
              I build digital experiences that help businesses{" "}
              <span className="text-blue">grow.</span>
            </motion.h1>

            <motion.p
              {...motionProps(0.16)}
              className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg"
            >
              Business websites, web applications and custom digital systems
              designed to attract customers, improve workflows and turn ideas
              into working products.
            </motion.p>

            <motion.div
              {...motionProps(0.24)}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Button to="/contact">Start a Project</Button>
              <Button variant="secondary" to="/work">
                <PlayCircle size={16} /> View My Work
              </Button>
            </motion.div>

            <motion.div
              {...motionProps(0.32)}
              className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60"
            >
              <span>Web Development</span>
              <span className="text-white/20">/</span>
              <span>Web Apps</span>
              <span className="text-white/20">/</span>
              <span>E-commerce</span>
              <span className="text-white/20">/</span>
              <span>Custom Systems</span>
            </motion.div>
          </div>

          <div className="relative z-20 min-h-[470px] lg:min-h-[570px]">
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: reduced ? 0 : 1, ease }}
              className="absolute bottom-0 left-1/2 h-[390px] w-[300px] -translate-x-1/2 rounded-[40px] border border-white/10 bg-white/7 backdrop-blur-xl sm:h-[460px] sm:w-[370px] lg:h-[560px] lg:w-[430px]"
            />

            <motion.div
              animate={reduced ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-1/2 z-10 flex h-[390px] w-[300px] -translate-x-1/2 items-end justify-center sm:h-[460px] sm:w-[370px] lg:h-[560px] lg:w-[430px]"
            >
              <div className="flex h-[84%] w-[84%] items-end justify-center rounded-t-[160px] bg-gradient-to-b from-white/10 to-white/0 p-2">
                <div className="flex h-full w-full items-end justify-center overflow-hidden rounded-t-[150px] bg-navy-light/75">
                  <img
                    src="/images/pixnobg.png"
                    alt="Ben Ekeh portrait placeholder"
                    className="h-full w-full object-cover object-top opacity-95"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduced ? 0 : 0.7,
                duration: reduced ? 0 : 0.6,
                ease,
              }}
              className="glass absolute bottom-24 right-0 z-30 rounded-2xl px-4 py-3 text-sm"
            >
              <p className="font-semibold">Benedict Ekeh</p>
              <p className="mt-1 text-white/60">Web Developer</p>
            </motion.div>

            <div className="absolute right-3 top-24 z-20 max-w-[140px] display-font text-lg italic text-white/65">
              Turning ideas into digital products →
            </div>
          </div>
        </div>
      </div>

      <a
        href="#approach"
        className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 text-[11px] text-white/40 lg:flex"
      >
        Scroll to explore <ArrowDown size={13} />
      </a>
    </section>
  );
}
