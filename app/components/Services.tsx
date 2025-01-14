"use client";
import HeadingSections from "./ui/heading-sections";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Brand identity",
    description:
      "We create a unique and memorable brand identity for your business.",
    list: [
      "Visual branding",
      "Brand strategy",
      "Identity development",
      "Digital and print collateral",
      "Brand guidelines",
      "Mockup design",
    ],
    icon: "/shape.svg",
  },
  {
    title: "Visual design",
    description:
      "Get your custom and exceptional work of UI and UX design for both website and mobile app interface, illustrations, motion graphics all toward your needs.",
    list: [
      "Design systems",
      "Responsive website",
      "Digital products",
      "Motion & interaction",
      "Illustration",
      "3D design",
      "Graphics design",
    ],
    icon: "/social-media.svg",
  },
  {
    title: "Development",
    description:
      "Our expert Front-End Developers are ready to implement the aesthetic of designs into codes adopting the latest framework and technology.",
    list: [
      "Front-end development",
      "CMS integrations",
      "SEO friendly",
      "Custom codes",
      "Web maintenance",
      "Quality assurance",
    ],
    icon: "/coding (2).svg",
  },
];

export default function Services() {
  return (
    <>
      <section
        id="services"
        className=" relative flex flex-col min-h-[800px] max-h-fit justify-center mt-20 gap-10 py-20"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/zivkali_httpss.mj.runo4quCk0VbO4_Abstract_vector_background_l_9319e9ad-dce9-40fd-bbe2-d248af5c071a_1.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[var(--background)] pointer-events-none" />
        </div>
        <div className="wrapper relative flex flex-col min-h-[800px] max-h-fit justify-center mt-20 gap-10 py-20">
          <span className="text-white text-4xl font-bold">Services</span>
          <HeadingSections>
            We offer a wide range of services to help you grow your business.
          </HeadingSections>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {services.map((service, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                    bounce: 0.5,
                  }}
                  key={index}
                  className="relative  cursor-pointer  drop-shadow-xl w-full min-h-[600px] overflow-hidden rounded-xl bg-[#3d3c3d] hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute flex flex-col gap-6 p-6 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={56}
                      height={56}
                      className="mr-auto"
                    />
                    <h3 className="text-2xl font-light font-intergal">
                      {service.title}
                    </h3>
                    <p className="text-base opacity-80 font-light tracking-normal">
                      {service.description}
                    </p>
                    <ul className="list-disc list-inside text-sm opacity-80 space-y-2">
                      {service.list.map((item, i) => (
                        <li className="font-sans font-medium text-xl" key={i}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute w-80 h-60 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
