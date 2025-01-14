"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Works() {
  const works = [
    {
      year: "2020",
      title: "BunnyCDN",
      description:
        "BunnyCDN is a fast CDN tool that comes at a fraction of the cost of traditional Content Delivery Networks, it offers features and performance with a fast global network.",
      tags: ["cdn", "web", "design"],
      image: "/hero.png",
    },
    {
      year: "2021",
      title: "CloudFlare",
      description:
        "BunnyCDN is a fast CDN tool that comes at a fraction of the cost of traditional Content Delivery Networks, it offers features and performance with a fast global network.",
      tags: ["security", "web", "cloud"],
      image: "/hero.png",
    },
    {
      year: "2022",
      title: "DigitalOcean",
      description:
        "BunnyCDN is a fast CDN tool that comes at a fraction of the cost of traditional Content Delivery Networks, it offers features and performance with a fast global network.",
      tags: ["hosting", "cloud", "infrastructure"],
      image: "/hero.png",
    },
  ];

  return (
    <>
      <section id="works" className="wrapper mb-20">
        <div className="flex flex-col gap-20 min-h-[500px] max-w-[900px] mx-auto">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-5">
              <span className="text-white text-4xl font-bold">works</span>
              <span className="text-white text-lg">
                We believe that great work speaks louder than words. Sharing our
                journey and accomplishments is what truly defines us.
              </span>
            </div>
            <p className="text-3xl  tracking-wide font-light ">
              Our dedicated team of designers, developers, strategists, and
              project managers collaborate seamlessly to bring visions to life.
              With creativity and precision, we deliver tailored branding,
              cutting-edge websites, targeted campaigns, and impactful user
              experiences.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[72px] gap-y-[100px] auto-cols-[1fr] wrapper">
        {works.map((work, index) => (
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
            className="flex flex-col gap-5"
          >
            <div className="tracking-wider">{work.year}</div>
            <div className="font-medium font-intergal text-3xl">
              {work.title}
            </div>
            <div className="">{work.description}</div>
            <div className="flex flex-row justify-start gap-2">
              {work.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-4 py-1 rounded-full text-sm font-bold uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="w-full h-[400px] bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={work.image}
                alt={`${work.title} work example`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
