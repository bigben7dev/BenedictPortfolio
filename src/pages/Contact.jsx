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
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
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

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <main className="min-h-screen bg-ivory pt-28">
        <SectionWrapper>
          <div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <SectionLabel>Start a project</SectionLabel>
              <h1 className="display-font mt-2 text-6xl font-semibold leading-[.9]">
                Tell me what you're building.
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-muted">
                No account required. Share the essentials and we'll use the
                brief to define the right next step.
              </p>
              <div className="mt-8 rounded-3xl bg-navy p-6 text-white">
                <p className="text-sm font-semibold">What happens next?</p>
                <ol className="mt-4 space-y-3 text-xs leading-5 text-white/55">
                  <li>01 · I review your brief.</li>
                  <li>02 · We clarify scope and priorities.</li>
                  <li>03 · We agree on the next practical step.</li>
                </ol>
              </div>
            </div>
            <form
              onSubmit={submit}
              className="rounded-3xl border border-border-warm bg-white/50 p-6 md:p-8"
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
                <label className="grid gap-2 text-xs font-semibold">
                  Project Type
                  <select
                    name="type"
                    value={form.type}
                    onChange={update}
                    className="rounded-xl border border-border-warm bg-ivory px-4 py-3 text-sm font-normal outline-none"
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
              <label className="mt-5 grid gap-2 text-xs font-semibold">
                Project Description
                <textarea
                  name="description"
                  value={form.description}
                  onChange={update}
                  rows="6"
                  required
                  className="resize-none rounded-xl border border-border-warm bg-ivory px-4 py-3 text-sm font-normal outline-none focus:border-blue"
                  placeholder="What are you trying to build? What should it help you accomplish?"
                />
              </label>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit">Send Project Brief</Button>

                <p className="text-xs leading-5 text-muted">
                  Your project details will open in WhatsApp for you to send.
                </p>
              </div>
            </form>
          </div>
        </SectionWrapper>
      </main>
    </>
  );

  function Field({ label, name, type = "text", ...props }) {
    return (
      <label className="grid gap-2 text-xs font-semibold">
        {label}
        <input
          name={name}
          type={type}
          {...props}
          className="rounded-xl border border-border-warm bg-ivory px-4 py-3 text-sm font-normal outline-none focus:border-blue"
        />
      </label>
    );
  }
}
