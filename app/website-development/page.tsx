export default function WebsiteDevelopment() {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-start items-center">
        <div className="min-w-[1000px] mx-auto flex flex-col gap-5 items-start justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold font-intergal">
              Website Development
            </h1>
            <p className="text-xl font-light font-intergal line-clamp-4 max-w-xl">
              We are a team of experienced website developers who are dedicated
              to providing you with the best website development services.
            </p>
          </div>
          <div className="h-40 w-full rounded-lg bg-red-500"></div>
        </div>
      </div>
    </>
  );
}
