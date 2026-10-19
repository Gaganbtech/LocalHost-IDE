"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import OmniRouteLogo from "@/shared/components/OmniRouteLogo";

export default function Footer() {
  const t = useTranslations("landing");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2D333B] bg-[#080A0F] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-6 rounded bg-[#E54D5E] flex items-center justify-center text-white">
                <OmniRouteLogo size={16} className="text-white" />
              </div>
              <h3 className="text-white text-lg font-bold">{t("brandName")}</h3>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-6 break-words">{t("footerTagline")}</p>
            <div className="flex gap-4">
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="https://github.com/Gaganbtech/LocalHost-IDE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  code
                </span>
              </a>
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="https://www.linkedin.com/in/gagan-a-92b44930a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white">{t("product")}</h4>
            <a
              className="text-gray-400 hover:text-[#E54D5E] text-sm transition-colors"
              href="#features"
            >
              {t("featuresLink")}
            </a>
            <a
              className="text-gray-400 hover:text-[#E54D5E] text-sm transition-colors"
              href="/dashboard"
            >
              {t("dashboardLink")}
            </a>
            <a
              className="text-gray-400 hover:text-[#E54D5E] text-sm transition-colors"
              href="https://github.com/Gaganbtech/LocalHost-IDE/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("changelog")}
            </a>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white">{t("resources")}</h4>
            <Link
              className="text-gray-400 hover:text-[#E54D5E] text-sm transition-colors"
              href="/docs"
            >
              {t("documentation")}
            </Link>
            <a
              className="text-gray-400 hover:text-[#E54D5E] text-sm transition-colors"
              href="https://github.com/Gaganbtech/LocalHost-IDE"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("github")}
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white">{t("legal")}</h4>
            <a
              className="text-gray-400 hover:text-[#E54D5E] text-sm transition-colors"
              href="https://github.com/Gaganbtech/LocalHost-IDE/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("mitLicense")}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2D333B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm break-words text-center md:text-left">
            {t("copyright", { year })}
          </p>
          <div className="flex gap-6">
            <a
              className="text-gray-600 hover:text-white text-sm transition-colors"
              href="https://github.com/Gaganbtech/LocalHost-IDE"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("github")}
            </a>
            <a
              className="text-gray-600 hover:text-white text-sm transition-colors"
              href="https://www.linkedin.com/in/gagan-a-92b44930a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
