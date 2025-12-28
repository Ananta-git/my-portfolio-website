import React from 'react';
import mypp from "../../assets/images/pp.jpg";
import { siteConfig } from "../../config/site.config";
import { 
  User, 
  Target, 
  Code, 
  Heart, 
  Award, 
  Clock, 
  Globe, 
  GraduationCap,
  Briefcase,
  BookOpen,
  Zap,
  Sparkles,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

const AboutSection: React.FC = () => {
  // Stats data
  const stats = [
    { icon: <Code />, label: 'Projects Completed', value: '25+' },
    { icon: <Clock />, label: 'Coding Hours', value: '2000+' },
    { icon: <Award />, label: 'Certifications', value: '5+' },
    { icon: <Globe />, label: 'Remote Experience', value: '3 Years' }
  ];

  // Timeline data
  const timeline = [
    { 
      year: '2019', 
      title: 'Teaching Journey Begins', 
      description: 'Started as Computer Teacher at Bhrikuti Secondary School',
      icon: <GraduationCap />
    },
    { 
      year: '2020', 
      title: 'Web Development Discovery', 
      description: 'Began learning HTML, CSS, and JavaScript',
      icon: <Code />
    },
    { 
      year: '2021', 
      title: 'React & Modern Stack', 
      description: 'Dived into React, TypeScript, and modern frontend tools',
      icon: <Zap />
    },
    { 
      year: '2023', 
      title: 'Full Stack Transition', 
      description: 'Expanded skills to Next.js, Node.js, and databases',
      icon: <TrendingUp />
    }
  ];

  // Values/philosophy
  const values = [
    {
      title: 'User-Centric Design',
      description: 'Every pixel serves a purpose. I believe in designing experiences that are both beautiful and functional.',
      icon: <Heart />
    },
    {
      title: 'Clean Code Philosophy',
      description: 'Writing maintainable, scalable code with best practices and modern patterns.',
      icon: <Sparkles />
    },
    {
      title: 'Continuous Learning',
      description: 'The tech landscape evolves daily. I stay updated with latest trends and technologies.',
      icon: <BookOpen />
    },
    {
      title: 'Problem-Solving Mindset',
      description: 'Turning complex challenges into simple, elegant solutions.',
      icon: <Target />
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-32">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] -z-10 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl mb-6">
            <User className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Beyond <span className="text-primary-600">the Code</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I bridge the gap between elegant design and robust functionality, 
            creating digital experiences that resonate with users and drive business value.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Story & Stats */}
          <div>
            {/* My Story */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 text-primary-500 mr-3" />
                My Journey
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Hello! I'm <strong className="text-primary-600">Ananta Lawati</strong>, a Full Stack Developer 
                  based in Nepal. My journey began in the classroom, teaching computer science for 4 years, 
                  which gave me a unique perspective on how people interact with technology.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This teaching experience ignited my passion for creating intuitive, user-friendly applications. 
                  I transitioned into web development, where I found my true calling in building digital solutions 
                  that solve real-world problems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, I specialize in crafting modern web applications using technologies like React, Next.js, 
                  and TypeScript. I believe in writing clean, maintainable code and creating experiences that 
                  users love.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-50 rounded-lg mr-3">
                      <div className="text-primary-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Timeline & Photo */}
          <div>
            {/* Profile Photo */}
            <div className="relative mb-12">
              <div className="relative z-10">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  {/* Add your photo here */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center">
                    <img
                        src={mypp}
                        alt={`${siteConfig.name} - Professional Portrait`}
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 
                                  rounded-full object-cover grayscale hover:grayscale-0 
                                  transition-all duration-500 border-2 border-white/20 
                                  shadow-lg hover:shadow-xl hover:scale-105"
  />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-primary-200/50"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-primary-100/30"></div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <TrendingUp className="w-6 h-6 text-primary-500 mr-3" />
                My Evolution
              </h3>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-transparent"></div>
                    
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {item.year}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values & Philosophy */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              My <span className="text-primary-600">Development Philosophy</span>
            </h3>
            <p className="text-gray-600">
              These principles guide every project I undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-600">
                      {value.icon}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 via-blue-50 to-primary-50 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Currently Building & Learning
              </h3>
              <p className="text-gray-700 mb-6">
                I'm focused on mastering advanced React patterns, exploring serverless architecture, 
                and contributing to open-source projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white text-primary-700 rounded-full font-medium shadow-sm">
                  Advanced React Patterns
                </span>
                <span className="px-4 py-2 bg-white text-blue-700 rounded-full font-medium shadow-sm">
                  Serverless Architecture
                </span>
                <span className="px-4 py-2 bg-white text-green-700 rounded-full font-medium shadow-sm">
                  GraphQL
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center shadow-xl">
                <Code className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg animate-pulse">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Let's Connect CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl mb-6">
            <MessageSquare className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Let's Build Something <span className="text-primary-600">Amazing</span> Together
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you have a project in mind, want to discuss technology, or just want to connect, 
            I'd love to hear from you.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;