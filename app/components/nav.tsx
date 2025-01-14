"use client";

import TransitionLink from "./ui/TransitionLink";
import MainLogo from "./ui/mainLogo";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const Links = [
  {
    name: "services",
    links: [
      { name: "website development", href: "/website-development" },
      { name: "brand identity", href: "/brand-identity" },
      { name: "visual design", href: "/visual-design" },
    ],
  },
  { name: "projects", href: "/projects" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 12,
        bounce: 0.5,
      }}
      className="bg-black/30 backdrop-blur-md max-w-3xl sm:mx-auto mx-4 z-50 sticky top-3 rounded-lg px-4 sm:px-0 border border-white/10"
    >
      <motion.nav
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-4 lg:px-8"
      >
        {/* Logo - Visible on all screens */}
        <div className="flex lg:flex-1 w-32">
          <TransitionLink href="/" className="-m-1.5 p-1.5">
            <MainLogo size={150} />
          </TransitionLink>
        </div>

        {/* Mobile Menu Trigger Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-white/5"
            >
              <div className="p-4">
                {Links[0].links?.map(
                  (item) => (
                    console.log(item),
                    (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <TransitionLink
                            href={item.href ?? ""}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </TransitionLink>
                        </div>
                      </div>
                    )
                  )
                )}
              </div>
            </PopoverPanel>
          </Popover>

          <TransitionLink
            href={Links[1].href ?? ""}
            className="text-sm/6 font-semibold text-white"
          >
            Projects
          </TransitionLink>
        </PopoverGroup>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="bg-white text-black flex items-center px-4 py-2 rounded-lg">
            contact us
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden relative"
      >
        {/* Overlay */}
        <div className="fixed inset-0 z-50 bg-black/30" />

        {/* Mobile Menu Panel */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <TransitionLink href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <MainLogo />
            </TransitionLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white hover:bg-gray-900">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {Links[0].links?.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href ?? ""}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-gray-900"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                {Links.map((item) => (
                  <TransitionLink
                    key={item.name}
                    href={item.href ?? ""}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-900"
                  >
                    {item.name}
                  </TransitionLink>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-900"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </motion.header>
  );
}
