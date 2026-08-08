"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  LogIn,
  UserPlus,
  ChevronRight,
} from "lucide-react";

export default function Header({ siteData }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
      {/* Main Navbar */}
      <div className="mx-auto flex h-[86px] w-full max-w-[1440px] items-center px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex h-full shrink-0 items-center"
          aria-label="Go to homepage"
        >
          <Image
            src={siteData.logo}
            alt="Job Portal Logo"
            width={700}
            height={400}
            priority
            className="h-[92px] w-auto max-w-[250px] object-contain sm:max-w-[230px] lg:h-[78px] lg:max-w-[350px]"
          />
        </Link>

        {/* ================= DESKTOP SEARCH ================= */}
        <div className="mx-7 hidden min-w-0 flex-1 lg:block xl:mx-10">
          <div className="relative mx-auto max-w-[470px]">
            <Search
              size={19}
              strokeWidth={2}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search jobs, companies, skills..."
              className="
                h-[48px]
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                pl-11
                pr-4
                text-[14px]
                text-slate-800
                outline-none
                transition-all
                placeholder:text-slate-400
                hover:border-slate-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-4
                focus:ring-blue-500/10
              "
            />
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="ml-auto hidden shrink-0 items-center md:flex">
          <div className="flex items-center gap-1">
            {siteData.navLinks?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  rounded-lg
                  px-3
                  py-2.5
                  text-[14px]
                  font-medium
                  text-slate-600
                  transition-all
                  hover:bg-blue-50
                  hover:text-blue-600
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-4 h-7 w-px bg-slate-200" />

          {/* Login */}
          <Link
            href="/login"
            className="
              inline-flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              text-sm
              font-semibold
              text-slate-700
              transition-all
              hover:border-blue-300
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            <LogIn size={17} />
            Login
          </Link>

          {/* Register */}
          <Link
            href="/register"
            className="
              ml-2
              inline-flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              hover:bg-blue-700
              hover:shadow-md
            "
          >
            <UserPlus size={17} />
            Register
          </Link>
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMobileMenu((prev) => !prev)}
          className="
            ml-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            text-slate-700
            transition
            hover:bg-slate-100
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      {mobileMenu && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-5 pt-4">

            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                placeholder="Search jobs, companies, skills..."
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  pl-11
                  pr-4
                  text-sm
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:bg-white
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-1">
              {siteData.navLinks?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:bg-slate-50
                    hover:text-blue-600
                  "
                >
                  {link.name}

                  <ChevronRight
                    size={17}
                    className="text-slate-400"
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              <Link
                href="/login"
                onClick={() => setMobileMenu(false)}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-50
                "
              >
                <LogIn size={17} />
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setMobileMenu(false)}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                <UserPlus size={17} />
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}