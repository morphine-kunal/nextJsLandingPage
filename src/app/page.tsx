import Image from "next/image";

const features = [
  {
    icon: "2.png",
    title: "Analytical Scorecard Generation",
    desc: "s u s t AI n creates visual or numerical summary that evaluates key performance indicators (KPIs) and metrics to provide insights into an organization's performance and aid in decision-making.",
  },
  {
    icon: "3.png",
    title: "Optimal Predictions for Resource Usage",
    desc: "s u s t AI n  provides accurate forecasts and recommendations to ensure efficient and sustainable utilization of resources over time.",
  },
  {
    icon: "4.png",
    title: "Credit Compliance Monitoring",
    desc: "s u s t AI n ensures adherence to credit policies and regulations to maintain financial sustainability.",
  },
  {
    icon: "5.png",
    title: "Recommendation on Case to Case Basis",
    desc: "s u s t AI n  recommendations on a case-by-case basis to ensure tailored and effective solutions to ensure smooth Green Building Certification Process.",
  },
];

export default function Home() {
  return (
    <>
      <div
        className="w-full h-screen mt-28 flex justify-center items-center"
        style={{
          backgroundImage: `url('/Vector.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mb-28 flex flex-col gap-y-16 md:gap-y-8">
          <div className="relative overflow-hidden">
            <Image src={"/logo.svg"} alt="logo" width={300} height={300} />
            <span className="absolute bottom-1 right-4 md:right-12 text-sm text-[#17726D]">
              Platform
            </span>
          </div>

          <div className="flex justify-between gap-x-3 gap-y-5 md:flex-row flex-col items-center">
            <div>
              <button className="rounded-full  px-8 py-3 bg-none border-2 border-[#17726D] text-center text-xs text-[#17726D] flex items-center gap-x-3">
                Demo
                <span>
                  <Image src={"/eye.svg"} alt="eye" width={18} height={18} />
                </span>
              </button>
            </div>

            <div>
              <button className="rounded-full px-8 py-3 bg-[#17726D] text-center text-white text-xs md:text-sm flex items-center gap-x-3">
                Start a Project{" "}
                <span>
                  <Image
                    src={"/arrow-right.svg"}
                    alt="arrow-right"
                    width={18}
                    height={18}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[72px] bg-[#DCB07B] hidden md:block"></div>
      <div className=" hidden md:block -mt-3">
        <Image
          src={"/background.svg"}
          alt="bg"
          width={200}
          height={100}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>

      <section className="w-[90%] mx-auto mb-12">
        <div className="text-2xl hidden md:block">
          <div className="border-t-[3px] border-[#17726D] w-[72px] mb-3"></div>
          Our
          <span className="font-bold">
            {" "}
            <br />
            Vision
          </span>
        </div>

        <div className="mb-28 hidden md:block">
          <div
            className="w-[80px] h-[80px] absolute  -right-8 rounded-md"
            style={{
              background: "rgba(23, 114, 109, 0.22)",
            }}
          ></div>
        </div>

        <div>
          <Image
            src={"/chart1.svg"}
            alt="chart"
            width={300}
            height={300}
            className="w-[80%] mx-auto hidden md:block"
          />
        </div>

        <div>
          <Image
            src={"/our-vision.svg"}
            alt="vision"
            width={100}
            height={100}
            className="w-full md:hidden block"
          />
        </div>
      </section>

      <section className="w-[90%] mx-auto mb-12">
        <div className="text-sm md:text-2xl  mb-12">
          <div className="border-t-[3px] border-[#17726D] w-[60px] md:w-[102px] mb-3"></div>
          Product
          <span className="font-bold">
            {" "}
            <br />
            Overview
          </span>
        </div>

        <div>
          <Image
            src={"/diagram.svg"}
            alt="chart"
            width={300}
            height={300}
            className="w-[80%] mx-auto hidden md:block"
          />
        </div>

        <div>
          <Image
            src={"/mobile-image-group.svg"}
            alt="vision"
            width={100}
            height={100}
            className="w-[80%] mx-auto md:hidden block"
          />
        </div>

        <div className="mb-28 hidden md:block">
          <div
            className="w-[80px] h-[80px] absolute -left-8 rounded-md"
            style={{
              background: "rgba(23, 114, 109, 0.22)",
            }}
          ></div>
        </div>
      </section>

      <section className="w-[90%] mx-auto  mb-12">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col mb-8 md:px-8">
            <div className="mb-8">
              <Image src={"/icons/1.png"} alt="icon1" width={55} height={55} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold overflow-hidden mb-2 md:mb-8 inknut-antiqua-regular">
                s u s t AI n <br /> Platform’s <br /> Features
              </h1>

              <p className="text-xs md:text-sm">
                Automated Green Building Certification <br /> Consulting
                Platform
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((item, index) => (
              <div
                className="rounded-xl"
                style={{
                  background: "rgba(23, 114, 109, 0.1)",
                }}
                key={index}
              >
                <div className="flex flex-col p-6">
                  <div className="mb-8">
                    <Image
                      src={`/icons/${item.icon}`}
                      alt="icon1"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold overflow-hidden mb-2">
                      {item.title}
                    </p>

                    <p className="text-xs text-[#475467]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[#e8f1f1] pb-12"
        style={{
          backgroundImage: `linear-gradient(rgba(232, 241, 241,0.9), rgba(232, 241, 241,0.9)),url('/illustration.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          inset: "2",
        }}
      >
        <div className="w-[90%] mx-auto py-6">
          <div className="mx-auto text-center mb-4 md:mb-28">
            <h1 className="text-xl md:text-4xl font-bold mb-2 overflow-hidden inknut-antiqua-regular">
              Coming soon...
            </h1>
            <p className="text-xs md:text-sm">
              Join the waitlist and get notified about our features releasing
              soon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto place-items-center">
            <div className="border-2 bg-white rounded-xl p-4 py-6 relative">
              <div className=" flex justify-between items-center border-2 rounded-xl">
                <div className="flex justify-center flex-1">
                  <p className="text-sm md:text-lg font-bold">ROI Analysis</p>
                </div>
                <div>
                  <Image
                    src={"/icons/6.png"}
                    alt="icons"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
              <p className="p-3 text-xs text-[#2F4252]">
                An in-house developed tool to help you predict your
                certification target, your potential energy and carbon emission
                savings, and the payback period on your investment.
              </p>
            </div>
            <div className="border-2 bg-white rounded-xl p-4  py-6 relative lg:mb-8 q">
              <div className=" flex justify-between items-center border-2 rounded-xl">
                <div className="flex justify-center flex-1">
                  <p className="text-sm md:text-lg  font-bold">
                    Energy Calculator
                  </p>
                </div>
                <div>
                  <Image
                    src={"/icons/7.png"}
                    alt="icons"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
              <p className="p-3 text-xs text-[#2F4252]">
                An energy simulator based on various factors of the building
                like location, size, occupants, operating hours, type of air
                conditioning etc for you to plan your sustainability targets.
              </p>
            </div>
            <div className="border-2 bg-white rounded-xl p-4  py-6 relative h-[202px]">
              <div className=" flex justify-between items-center border-2 rounded-xl">
                <div className="flex justify-center flex-1">
                  <p className="text-sm md:text-lg  font-bold">AI Agent</p>
                </div>
                <div>
                  <Image
                    src={"/icons/8.png"}
                    alt="icons"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
              <p className="p-3 text-xs text-[#2F4252]">
                 LLM-based AI agents for each stakeholder in the built industry,
                providing role-specific expertise for the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8f1f1]">
        <Image
          src={"/background-3.png"}
          alt="bg"
          width={100}
          height={100}
          style={{ width: "100%" }}
        />
        <div className="bg-[#DCB07B] h-[200px] md:h-[300px]">
          <div>
            <p className="text-xl md:text-4xl font-bold text-center text-[#FFFFFF] overflow-hidden inknut-antiqua-regular">
              Join The Waitlist!
            </p>
            <p className="text-[0.6rem] md:text-xs text-[#FFFFFF] text-center mt-4 w-[80%] md:w-[60%] mx-auto">
              Take the first step towards sustainable construction by harnessing
              the power of GreenCert. Sign up now to streamline your
              certification process, optimize building performance, and
              contribute to a greener future.
            </p>
          </div>

          <div className="flex justify-center items-center mt-12 md:mt-24">
            <button className="rounded-full px-8 py-3 bg-[#17726D] text-center text-white text-xs md:text-sm flex items-center gap-x-3">
              Sign Up for a Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
