const ValueSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-200 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 max-w-4xl">
          I'll help you to{" "}
          <span className="font-semibold">design better products</span>{" "}
          and achieve outcomes{" "}
          <span className="text-gray-500">that matter.</span>
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Hands-on
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I use design tools to clarify ideas, align vision, and
              deliver results through collaboration.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Strategy
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I turn user insights into clear direction, shared
              vision, and strategic advantage.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Leadership
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I foster collaboration and empower teams to reach
              their full potential.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueSection;
