import { siteConfig } from "@/data/data";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const handleOnClick = () => {
    console.log("clcick");
    window.location.href = "/admin";
  };

  return (
    <main className="relative w-screen h-screen">
      {/* Spline Scene */}
      <Spline
        scene="https://prod.spline.design/jG268ey2jKa7QVmE/scene.splinecode"
        className="absolute inset-0 w-screen h-full"
      />

      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-15 blur-lg"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white pointer-events-none backdrop:filter backdrop-brightness-50">
        <h1 className="font-bold text-9xl font-kagak">{siteConfig.name}</h1>
        <h2 className="text-3xl font-light text-gray-200 font-tdc">
          {siteConfig.description}
        </h2>
        <div className="mt-4">
          <button
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xl font-semibold leading-6 text-white inline-block pointer-events-auto"
            onClick={handleOnClick} // This directly calls the function
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10">
              <span>Witness the Magic ✨</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </div>
    </main>
  );
}
