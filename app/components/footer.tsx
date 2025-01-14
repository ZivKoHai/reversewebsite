import Image from "next/image";

// const solutionsLinks = [
//   { name: "Marketing", href: "/marketing" },
//   { name: "Analytics", href: "/analytics" },
//   { name: "Automation", href: "/automation" },
//   { name: "Commerce", href: "/commerce" },
//   { name: "Insights", href: "/insights" },
// ];

// const supportLinks = [
//   { name: "Submit ticket", href: "/submit-ticket" },
//   { name: "Documentation", href: "/documentation" },
//   { name: "Guides", href: "/guides" },
// ];

// const companyLinks = [
//   { name: "About", href: "/about" },
//   { name: "Blog", href: "/blog" },
//   { name: "Jobs", href: "/jobs" },
//   { name: "Press", href: "/press" },
// ];

// const legalLinks = [
//   { name: "Terms of service", href: "/terms" },
//   { name: "Privacy policy", href: "/privacy" },
//   { name: "License", href: "/license" },
// ];

export default function Footer() {
  return (
    <footer className="wrapper">
      <div className="max-w-7xl">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src="/reverse-logo.svg"
              alt="Logo"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium">
                Making the world a better place through constructing elegant
                hierarchies.
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid"></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
