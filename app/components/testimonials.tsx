import EmblaCarousel from "./ui/embla-carousel";

const slides = [
  {
    name: "John Doe",
    role: "CEO of Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "John Doe",
    role: "CEO of Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "John Doe",
    role: "CEO of Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "John Doe",
    role: "CEO of Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "John Doe",
    role: "CEO of Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    name: "John Doe",
    role: "CEO of Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-4 px-4">
      <div className="flex flex-col text-background gap-20 max-h-[500px] max-w-[900px] mx-auto mb-[100px]">
        <div className="flex flex-col gap-5">
          <span className="text-white text-4xl font-bold">testimonials</span>
          <span className="text-white text-lg">
            We believe that great work speaks louder than words. Sharing our
            journey and accomplishments is what truly defines us.
          </span>
        </div>
      </div>
      <EmblaCarousel slides={slides} />
    </section>
  );
}
