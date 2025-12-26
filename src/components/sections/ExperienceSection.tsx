import { useState } from "react";
import { experienceData } from "../../data/experience";

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Decide how much data to show
  const visibleData = showAll
    ? experienceData
    : experienceData.slice(0, 3);

  return (
    <section className="relative bg-gradient-to-b from-[#0b1620] via-[#020b13] to-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-medium text-gray-300 max-w-4xl">
          I’ve contributed as a{" "}
          <span className="text-white font-semibold">hands-on designer</span>{" "}
          and{" "}
          <span className="text-white font-semibold">design leader</span>{" "}
          for:
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleData.map((item) => (
            <div
              key={item.company}
              className="bg-black/70 backdrop-blur rounded-3xl p-8 transition hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]"
            >
              <h3 className="text-2xl font-semibold text-white">
                {item.company}
              </h3>
              <p className="mt-4 text-white font-medium">
                {item.role}
              </p>
              <p className="mt-2 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        {experienceData.length > 2 && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3 rounded-full border border-gray-500 text-white hover:bg-white hover:text-black transition"
            >
              {showAll ? "Show Less" : "All Roles"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ExperienceSection;
