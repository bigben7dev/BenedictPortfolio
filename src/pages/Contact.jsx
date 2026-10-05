import { useState } from "react";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionLabel from "../components/ui/SectionLabel";
import Button from "../components/ui/Button";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    type: "Business Website",
    description: "",
    budget: "",
    timeline: "",
    whatsapp: "",
  });

  const WHATSAPP_NUMBER = "2349024285360";

  const update = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const submit = (e) => {
    e.preventDefault();

    const message = `
   NEW PROJECT INQUIRY
   ----------------------------

   Name: ${form.name}
   Email: ${form.email}
   Business / Organization: ${form.business || "Not provided"}

   Project Type: ${form.type}
   Budget Range: ${form.budget || "Not specified"}
   Timeline: ${form.timeline || "Not specified"}
   Client WhatsApp: ${form.whatsapp || "Not provided"}

   PROJECT DESCRIPTION
   ${form.description}
   `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-ivory pt-28 text-dark-text transition-colors duration-300 dark:bg-navy dark:text-white">
      <SectionWrapper>
        <div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          {/* Intro */}
          <div>
            <SectionLabel>Start a project</SectionLabel>

            <h1 className="display-font mt-2 text-6xl font-semibold leading-[.9]">
              Tell me what you're building.
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-muted transition-colors duration-300 dark:text-white/60">
              No account required. Share the essentials and we'll use the brief
              to define the right next step.
            </p>

            {/* What happens next */}
            <div className="mt-8 rounded-3xl bg-navy p-6 text-white dark:bg-[#162733]">
              <p className="text-sm font-semibold">What happens next?</p>

              <ol className="mt-4 space-y-3 text-xs leading-5 text-white/55">
                <li>01 · I review your brief.</li>
                <li>02 · We clarify scope and priorities.</li>
                <li>03 · We agree on the next practical step.</li>
              </ol>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="
              rounded-3xl
              border border-border-warm
              bg-white/60
              p-6
              shadow-sm
              transition-colors
              duration-300
              dark:border-white/10
              dark:bg-[#14202A]
              dark:shadow-none
              md:p-8
            "
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={update}
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                required
              />

              <Field
                label="Business / Organization"
                name="business"
                value={form.business}
                onChange={update}
              />

              {/* Project Type */}
              <label className="grid gap-2 text-xs font-semibold">
                Project Type
                <select
                  name="type"
                  value={form.type}
                  onChange={update}
                  className="
                    w-full
                    rounded-xl
                    border border-border-warm
                    bg-ivory
                    px-4 py-3
                    text-sm font-normal
                    text-dark-text
                    outline-none
                    transition-colors
                    duration-200
                    hover:border-dark-text/30
                    focus:border-blue
                    dark:border-white/10
                    dark:bg-[#0D1B24]
                    dark:text-white
                    dark:hover:border-white/20
                  "
                >
                  <option>Business Website</option>
                  <option>Web Application</option>
                  <option>E-commerce</option>
                  <option>Custom System</option>
                </select>
              </label>

              <Field
                label="Budget Range"
                name="budget"
                value={form.budget}
                onChange={update}
              />

              <Field
                label="Timeline"
                name="timeline"
                value={form.timeline}
                onChange={update}
              />

              <Field
                label="WhatsApp Number"
                name="whatsapp"
                value={form.whatsapp}
                onChange={update}
              />
            </div>

            {/* Description */}
            <label className="mt-5 grid gap-2 text-xs font-semibold">
              Project Description
              <textarea
                name="description"
                value={form.description}
                onChange={update}
                rows="6"
                required
                placeholder="What are you trying to build? What should it help you accomplish?"
                className="
                  resize-none
                  rounded-xl
                  border border-border-warm
                  bg-ivory
                  px-4 py-3
                  text-sm font-normal
                  text-dark-text
                  outline-none
                  transition-colors
                  duration-200
                  placeholder:text-muted/60
                  hover:border-dark-text/30
                  focus:border-blue
                  dark:border-white/10
                  dark:bg-[#0D1B24]
                  dark:text-white
                  dark:placeholder:text-white/30
                  dark:hover:border-white/20
                "
              />
            </label>

            {/* Submit */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit">Send Project Brief</Button>

              <p className="text-xs leading-5 text-muted transition-colors duration-300 dark:text-white/50">
                Your project details will open in WhatsApp for you to send.
              </p>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </main>
  );
}

function Field({ label, name, type = "text", ...props }) {
  return (
    <label className="grid gap-2 text-xs font-semibold">
      {label}

      <input
        name={name}
        type={type}
        {...props}
        className="
          w-full
          rounded-xl
          border border-border-warm
          bg-ivory
          px-4 py-3
          text-sm font-normal
          text-dark-text
          outline-none
          transition-colors
          duration-200
          placeholder:text-muted/60
          hover:border-dark-text/30
          focus:border-blue
          dark:border-white/10
          dark:bg-[#0D1B24]
          dark:text-white
          dark:placeholder:text-white/30
          dark:hover:border-white/20
        "
      />
    </label>
  );
}
