import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-fit py-16 flex items-center relative bg-[#0B0F17] overflow-hidden">
        <div className="absolute w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] rounded-full blur-[80px] sm:blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#ACFF3D]/40 to-[#3D76FF]/40" />
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-16 sm:gap-0 px-4 z-10 justify-center items-center">
          <div className="max-w-[1200px] mx-auto px-4 z-10">
            <div className="flex flex-col gap-6 max-w-[600px]">
              <p className="text-sm uppercase tracking-wider text-white">
                DESIGN SMARTER, NOT HARDER
              </p>
              <h1 className="text-5xl font-bold text-white leading-tight">
                <span className="text-[#ACFF3D]">We Create, Optimize,</span>
                and Deliver Digital Excellence.
              </h1>
              <p className="text-white text-lg">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="flex gap-4 mt-4">
                <button className="px-6 py-3 bg-[#ACFF3D] text-black font-medium rounded-lg hover:bg-opacity-90">
                  Schedule a Demo
                </button>
                <button className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/Macbook-mockup-hero.png"
              alt="laptop-mockup"
              quality={100}
              width={1000}
              height={1000}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <section className=" px-4 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 z-20">
          <div className="flex flex-col gap-6 w-full z-10">
            <p className="text-sm uppercase tracking-wider text-white">
              DESIGN SMARTER, NOT HARDER
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              we offer a variety of service to elevate your brand visual
              identity
            </h2>
            <p className="text-white text-lg z-10">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <Image
            src="/mockup-subhero.png"
            alt="mockup-subhero"
            width={1000}
            quality={100}
            height={1000}
            sizes="100vw"
            className="object-cover z-10"
          />
        </div>

        <Image
          src="/blob-subhero.png"
          alt="blob-subhero"
          width={1000}
          quality={100}
          height={1000}
          sizes="100vw"
          className="object-cover absolute bottom-0 left-0 "
        />
        <Image
          src="/3d-shape-subhero.png"
          alt="3d-shape-subhero"
          width={500}
          quality={100}
          height={500}
          sizes="100vw"
          className="object-cover absolute sm:top-0 sm:right-0 -top-5 -right-1/2 z-0"
        />
      </section>
      <section className="w-full min-h-fit py-20 flex items-center relative  mx-auto overflow-hidden flex-col gap-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="relative group">
              <div className="w-full max-w-[422px] mx-auto rounded-2xl p-[1px] animate-border">
                <div className="relative text-center z-10 px-8 py-16 rounded-2xl bg-[#080b11] h-full">
                  <Image
                    src={"/chat_zinhdw.webp"}
                    alt="grid"
                    width={600}
                    className="mx-auto w-[85%] mb-6"
                    height={600}
                  />
                  <h1 className="text-xl font-semibold tracking-tight text-white">
                    Create Group Effortlessly
                  </h1>
                  <p className="text-base pt-2 text-gray-300 capitalize">
                    Seamless chats, crystal-clear videos, and <br />
                    premium audio quality
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-full backdrop-blur-sm  ">
          <div className="marquee-container bg-[#BAEF02] py-4 ">
            <div className="marquee-content">
              <span className="text-2xl font-bold px-4">Web Development</span>
              <span className="text-[#fff] text-2xl px-4">•</span>
              <span className="text-2xl font-bold px-4">UI/UX Design</span>
              <span className="text-[#fff] text-2xl px-4">•</span>
              <span className="text-2xl font-bold px-4">Digital Marketing</span>
              <span className="text-[#fff] text-2xl px-4">•</span>
              <span className="text-2xl font-bold px-4">Brand Strategy</span>
              <span className="text-[#fff] text-2xl px-4">•</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen py-16 relative">
        <div
          className="absolute inset-0 bg-gradient-from-top pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgb(8, 9, 15) 0%, rgba(8, 9, 15, 0.8) 25%, rgba(8, 9, 15, 0.4) 50%, transparent 100%)",
            zIndex: 1,
          }}
        ></div>
        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-from-bottom pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgb(8, 9, 15) 0%, rgba(8, 9, 15, 0.8) 25%, rgba(8, 9, 15, 0.4) 50%, transparent 100%)",
            zIndex: 1,
          }}
        ></div>
        <Image
          src="/background-benefits.png"
          alt="background-benefits"
          sizes="100vw"
          quality={100}
          fill
          className="object-cover"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-5xl font-bold text-white leading-tight">
              break free from overpriced solutions.
            </h2>
            <p className="text-lg text-gray-300">
              professional websites and designs shouldn&apos;t cost a fortune.
              we offer high-quality services at prices you can afford
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#BAEF02] rounded-lg">
                <span className="text-2xl">$</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  TRANSPARENT PRICING
                </h3>
                <p className="text-gray-300">
                  No Hidden Fees. Know Exactly What You&apos;re Paying For From
                  The Start
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#BAEF02] rounded-lg">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  AFFORDABLE EXCELLENCE
                </h3>
                <p className="text-gray-300">
                  Eye-Stunning Designs And High-Performing Websites Without
                  Breaking The Bank
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#BAEF02] rounded-lg">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                  <path d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  TAILORED FOR YOUR BUDGET
                </h3>
                <p className="text-gray-300">
                  Flexible Plans That Fit Your Needs And Budget, Whether
                  You&apos;re A Startup Or An Established Business
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/benefits-mockup.png"
            alt="benefits-mockup"
            quality={100}
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full min-h-screen py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sticky top-10 z-10">
          <h2 className="text-5xl font-bold text-white leading-tight">
            latest works
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Project Card 1 */}
          <div className="bg-[#0B0F17]/60 backdrop-blur-lg rounded-3xl p-6 border border-white/10">
            <div className="aspect-video relative rounded-2xl overflow-hidden">
              <Image
                src="/MStore.png"
                alt="MStore Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <span className="text-sm text-white/60">Development Project</span>
              <h3 className="text-2xl font-semibold text-white mt-2">MStore</h3>
              <p className="text-white/80 mt-2">
                Mangcoding is a biggest company in Indonesia, who provides the
                services in Development Website, Shopify and Wordpress
              </p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-[#0B0F17]/60 backdrop-blur-lg rounded-3xl p-6 border border-white/10">
            <div className="aspect-video relative rounded-2xl overflow-hidden">
              <Image
                src="/Beauty.png"
                alt="Beauty Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <span className="text-sm text-white/60">Development Project</span>
              <h3 className="text-2xl font-semibold text-white mt-2">Beauty</h3>
              <p className="text-white/80 mt-2">
                Mangcoding is a biggest company in Indonesia, who provides the
                services in Development Website, Shopify and Wordpress
              </p>
            </div>
          </div>
        </div>

        {/* Background 3D Shape */}
        <Image
          src="/3d-shape-works.png"
          alt="3d-shape-works"
          width={800}
          height={800}
          className="absolute top-0 right-0 object-contain opacity-60 sm:w-[800px] w-[400px] z-0"
        />
      </section>
      <section
        id="cta"
        className="w-full py-32 px-4 relative overflow-hidden bg-gradient-to-br from-[#0B0F17] to-[#0B0F17]/80"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/cta-background.png"
            alt="Background Gradient"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Background blur effect */}
        <div className="absolute w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] rounded-full blur-[80px] sm:blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#ACFF3D]/20 to-[#3D76FF]/20" />

        {/* Content container */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Discipline will take you places motivation can&apos;t
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-opacity-90">
              Schedule a Demo
            </button>
            <button className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Laptop image */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          <Image
            src="/Macbook.png" // replace with the correct path for your Macbook image
            alt="Laptop Image"
            width={1400}
            height={900}
            className="w-full h-auto mx-auto"
            priority
          />
        </div>
      </section>
    </>
  );
}
