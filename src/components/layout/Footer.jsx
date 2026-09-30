import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-shell grid gap-3 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img
            src="/images/logo.png"
            alt="Ben Ekeh"
            className="block h-8 w-auto max-w-[150px] object-contain"
          />
          <span className="text-white font-bold text-lg">BENEDICT EKEH</span>
          <p className="max-w-xs text-sm leading-6 text-white/55">
            Web Developer · Digital Products · Real Solutions
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-white/45">
            Navigate
          </p>
          <div className="grid gap-2 text-sm text-white/65">
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <Link to="/work" className="hover:text-white">
              Work
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-white/45">
            Connect
          </p>
          <div className="flex gap-2">
            <a
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 hover:border-blue"
              href="https://github.com/bigben7dev"
              target="_blank"
              rel="noreferrer"
            >
              {<FaGithub size={20} />}
            </a>
            <a
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 hover:border-blue"
              href="https://www.linkedin.com/in/benedict-ekeh-301bb0395?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
            >
              {<FaLinkedin size={20} />}
            </a>
            <a
              aria-label="Instagram"
              className="rounded-full border border-white/10 p-2.5 hover:border-blue"
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              {<FaInstagram size={20} />}
            </a>
            <a
              aria-label="WhatsApp"
              className="rounded-full border border-white/10 p-2.5 hover:border-blue"
              href="https://wa.me/2349067654549"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              aria-label="Facebook"
              className="rounded-full border border-white/10 p-2.5 hover:border-blue"
              href="https://www.facebook.com/profile.php?id=61590785755995"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Benedict Ekeh. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
