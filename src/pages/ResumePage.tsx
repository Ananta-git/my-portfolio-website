import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
} from 'lucide-react';

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="bg-gray-950 py-24 text-gray-200">
      <div className="container-custom max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

          {/* LEFT SIDEBAR */}
          <aside className="bg-gray-900 p-8 space-y-10">

            {/* Name */}
            <div>
              <h2 className="text-3xl font-bold text-white">
                Ananta Lawati
              </h2>
              <p className="mt-1 text-primary-400 font-medium">
                Full Stack Developer
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs tracking-widest text-gray-400 mb-4">
                CONTACT
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> anantalawati6@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> 9827941390
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} /> Damak-2, Jhapa, Nepal
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} /> anantalawati.com.np
                </li>
                <li className="flex items-center gap-2">
                  <Github size={16} /> github.com/Ananta-git
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin size={16} /> linkedin.com
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xs tracking-widest text-gray-400 mb-4">
                TECHNICAL SKILLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React',
                  'Next.js',
                  'JavaScript',
                  'TypeScript',
                  'Tailwind CSS',
                  'HTML5',
                  'CSS3',
                  'Git',
                  'REST APIs',
                ].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xs tracking-widest text-gray-400 mb-4">
                LANGUAGES
              </h3>
              <p className="text-sm">English, Nepali, Hindi</p>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="md:col-span-2 bg-gray-950 p-10 space-y-12">

            {/* Summary */}
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">
                Professional Summary
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer and BSc CSIT (8th Semester) student with
                strong experience in React and Next.js. Computer Teacher with
                4 years of teaching experience, skilled in problem-solving,
                communication, and explaining complex technical concepts.
                Actively seeking job, freelance, or remote opportunities.
              </p>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-xl font-semibold text-white mb-5">
                Projects
              </h3>
              <div className="space-y-5 text-gray-400 text-sm">
                <div>
                  <p className="font-medium text-gray-200">
                    Portfolio Website
                  </p>
                  <p>
                    Personal portfolio showcasing projects, resume, and contact
                    details. Built using React, TypeScript, and Tailwind CSS.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-200">
                    Task Management App (Demo)
                  </p>
                  <p>
                    CRUD-based task management system with responsive UI and
                    clean component architecture.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-200">
                    E-commerce Website (Concept)
                  </p>
                  <p>
                    Product listing and cart-based web app focusing on UI/UX
                    design and user flow.
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Briefcase size={18} /> Experience
              </h3>
              <p className="text-gray-400">
                <span className="font-medium text-gray-200">
                  Computer Teacher
                </span><br />
                Bhrikuti Secondary School — 4 Years
              </p>
              <ul className="list-disc list-inside text-gray-400 text-sm mt-2">
                <li>Taught computer science to secondary level students</li>
                <li>Prepared curriculum and teaching materials</li>
                <li>Conducted practical computer lab sessions</li>
              </ul>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap size={18} /> Education
              </h3>
              <p className="text-gray-400">
                <span className="font-medium text-gray-200">
                  BSc. Computer Science & IT (BSc CSIT)
                </span><br />
                Tribhuvan University — Shreeyantra College<br />
                8th Semester
              </p>
            </section>

            {/* Certification */}
            <section>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Award size={18} /> Certification
              </h3>
              <p className="text-gray-400">
                180 Hours Internship Certificate — Infinity Company (Upcoming)
              </p>
            </section>

            {/* Download */}
            <div>
              <a
                href="/Ananta_Lawati_Resume.pdf"
                download
                className="inline-block rounded-lg bg-primary-500 px-6 py-3 font-medium text-white transition hover:bg-primary-600"
              >
                Download Resume (PDF)
              </a>
            </div>

          </main>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
