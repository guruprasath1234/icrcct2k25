import { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Users, Award, BookOpen, Lightbulb, Mail, ChevronDown, CheckCircle, Target, TrendingUp, Globe } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about-paper', 'about-pitchathon', 'topics', 'dates'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about-paper', label: 'Paper Presentation' },
    { id: 'about-pitchathon', label: 'Pitchathon' },
    { id: 'topics', label: 'Topics' },
    { id: 'dates', label: 'Important Dates' },
    ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className={`w-8 h-8 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                ICRCCT 2k25
              </span>
            </div>
              <div className="hidden md:flex items-center space-x-4">
          <a
          href="/images/poster/icrcct2k25.pdf"  // replace with your file path
          download="ICRCCT_2k25_Poster.pdf" // name of the downloaded file
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
          Download Poster
          </a>
          </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 ${
                    scrolled
                      ? activeSection === item.id ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                      : activeSection === item.id ? 'text-white font-semibold' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 bg-white rounded-lg shadow-lg mt-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
          )}
          
        </div>
        
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 300 + 50 + 'px',
                  height: Math.random() * 300 + 50 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                  animationDelay: Math.random() * 5 + 's',
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              International Conference on<br />
              <span className="text-teal-200">Recent Trends in Computing</span><br />
              <span className="text-teal-200">and Communication Technologies</span><br/>
              <span className="text-base sm:text-lg md:text-xl lg:text-1xl font-semibold">
                Department of Computer Science and Engineering
 In Association with IEEE Computer Society, SSCE, Bangalore
              </span>
            </h1>
            {/* <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <p className="text-2xl sm:text-3xl font-bold text-white">ICRCCT 2k25</p>
            </div> */}
            <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-4xl mx-auto font-light">
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('about-paper')}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Join Paper Presentation
              </button>
<a
  href="https://forms.gle/qdWGK7idbRhGfCjF9"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block text-center"
>
  Register Now
</a>
            </div>
          </div>


        </div>
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
      </section>

      {/* Conference Info Bar */}
      <section className="bg-white shadow-md sticky top-16 z-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
      <div className="flex items-center justify-center space-x-2">
        <Calendar className="w-4 h-4 text-blue-600" />
        <div>
          <p className="text-xs text-gray-600">Conference Date</p>
          <p className="text-sm font-semibold text-gray-900">Nov 21 & 22, 2025</p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <MapPin className="w-4 h-4 text-blue-600" />
        <div>
          <p className="text-xs text-gray-600">Venue</p>
          <p className="text-sm font-semibold text-gray-900">Sri Sairam College of Engineering</p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <Users className="w-4 h-4 text-blue-600" />
        <div>
          <p className="text-xs text-gray-600">Expected Participants</p>
          <p className="text-sm font-semibold text-gray-900">500+ Global Attendees</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* =========================
     About Paper Presentation
========================= */}
<section
  id="about-paper"
  className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden"
>
  {/* Decorative background blobs */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div className="animate-fade-in-left space-y-6">
        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
          Research Excellence
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          About <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Paper Presentation</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to the <strong>International Paper Presentation Conference</strong>, a premier platform advancing research and collaboration in computer science. Scholars, researchers, and industry experts from around the globe converge here to share innovation and insight.
        </p>

        <div className="space-y-4">
          {[
            "Present cutting-edge research to a global audience",
            "Network with leading researchers and industry experts",
            "Receive valuable feedback from peer reviewers",
          ].map((text, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
            <a
              href="mailto:icrcct2k25@sairamce.edu.in"
              className="text-blue-700 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mail your paper to: icrcct2k25@sairamce.edu.in
            </a>
          </div>
        </div>

        <a
          href="https://forms.gle/qdWGK7idbRhGfCjF9"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Submit Your Paper
        </a>
      </div>

      {/* Right Cards */}
      <div className="animate-fade-in-right grid grid-cols-2 gap-8">
        {[
          {
            icon: BookOpen,
            title: "Research Papers",
            text: "Share your groundbreaking research",
            color: "from-blue-500 to-blue-700",
          },
          {
            icon: Award,
            title: "Best Paper Awards",
            text: "Recognition for excellence",
            color: "from-teal-500 to-teal-700",
            mt: "mt-10",
          },
          {
            icon: Users,
            title: "Peer Review",
            text: "Rigorous evaluation process",
            color: "from-purple-500 to-purple-700",
            mt: "-mt-10",
          },
          {
            icon: Globe,
            title: "Global Reach",
            text: "An international platform",
            color: "from-orange-500 to-red-600",
          },
        ].map(({ icon: Icon, title, text, color, mt }, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${color} p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${mt || ""
              }`}
          >
            <Icon className="w-12 h-12 mb-4 opacity-90" />
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-blue-100">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* =========================
     About Pitchathon
========================= */}
<section
  id="about-pitchathon"
  className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 overflow-hidden"
>
  {/* Decorative shapes */}
  <div className="absolute -top-10 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
  <div className="absolute bottom-10 left-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image/Icons */}
      <div className="order-2 lg:order-1 animate-fade-in-left relative">
        <div className="relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300">
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: Target, color: "text-blue-600", title: "Business Strategy", desc: "Refine your approach" },
              { icon: Lightbulb, color: "text-teal-600", title: "Innovation", desc: "Creative solutions" },
              { icon: TrendingUp, color: "text-purple-600", title: "Growth", desc: "Accelerate success" },
              { icon: Users, color: "text-orange-600", title: "Networking", desc: "Connect with investors" },
            ].map(({ icon: Icon, color, title, desc }, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300">
                <Icon className={`w-10 h-10 ${color} mx-auto mb-3`} />
                <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="order-1 lg:order-2 animate-fade-in-right space-y-6">
        <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
          Entrepreneurship Excellence
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          About <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Pitchathon</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Pitchathon empowers participants to refine strategies, enhance pitching skills, and gain insights from investors. Beyond potential funding, it’s a space for <strong>innovation, growth, and connection</strong> with leaders shaping tomorrow’s industries.
        </p>

        <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold mb-3">What You'll Gain</h3>
          <ul className="space-y-2 text-blue-50">
            {[
              "Expert feedback from seasoned investors",
              "Potential funding opportunities",
              "Network with industry leaders",
              "Enhanced presentation skills",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://forms.gle/cPPuEKHizAX8TPjn8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Submit Your Pitch
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Topics Section */}
      <section id="topics" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Conference Tracks
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Topics & Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore cutting-edge research across multiple domains in computing and communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Artificial Intelligence', icon: '🤖', topics: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Ethics'] },
              { title: 'Cloud Computing', icon: '☁️', topics: ['Cloud Architecture', 'Edge Computing', 'Serverless', 'Containerization'] },
              { title: 'Cybersecurity', icon: '🔒', topics: ['Network Security', 'Cryptography', 'Threat Detection', 'Privacy'] },
              { title: 'IoT & Embedded Systems', icon: '📡', topics: ['Smart Devices', 'Sensor Networks', 'Industry 4.0', 'Wearables'] },
              { title: 'Data Science', icon: '📊', topics: ['Big Data Analytics', 'Data Mining', 'Visualization', 'Predictive Analytics'] },
              { title: 'Blockchain', icon: '⛓️', topics: ['Distributed Ledger', 'Smart Contracts', 'Cryptocurrency', 'DeFi'] },
            ].map((track, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4">{track.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{track.title}</h3>
                <ul className="space-y-2">
                  {track.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Section for paper Presentation*/}
      <section id="dates" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Mark Your Calendar
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Important Dates for Paper Presentation</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with key deadlines and milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Paper Submission', date: 'November 5, 2025', icon: BookOpen },
              { title: 'Notification', date: 'November 10, 2025', icon: Mail },
              { title: 'Registration Deadline', date: 'November 12, 2025', icon: Calendar },
              { title: 'Conference Dates', date: 'November 21 & 22, 2025', icon: Award },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-2xl font-bold text-teal-200">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ===============================
     Important Dates Section
================================ */}
<section id="dates" className="py-24 bg-gradient-to-br from-blue-600 to-teal-600 text-white relative overflow-hidden">
  {/* Background glow accents */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-300 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16 animate-fade-in-up">
      <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
        Mark Your Calendar
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Important Dates for Pitchathon</h2>
      <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
        Stay updated with key deadlines and milestones
      </p>
    </div>

    {/* Dates Grid */}
    <div className="flex flex-wrap justify-center gap-10 animate-fade-in-up">
      {[
        { title: 'Pitch Submission', date: 'November 22, 2025', icon: BookOpen },
        { title: 'Pitching Date (Offline)', date: 'November 22, 2025', icon: Award },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl text-center w-72 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <item.icon className="w-12 h-12 mx-auto mb-4 text-teal-200" />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-2xl font-bold text-teal-100">{item.date}</p>
        </div>
      ))}
    </div>
  </div>
</section>



    {/* Photo Gallery Section */}
<section id="photos" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <div className="text-center mb-16 animate-fade-in-up">
      <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
Sri Sairam college of Engineering      </div>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
       Leadership Team
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      </p>
    </div>

    {/* Leader Section */}
    <div className="mb-20">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10"></h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { src: './images/principal.jpg', name: 'Dr. B Shadaksharappa', role: 'Principal' },
          { src: '/images/coo.png', name: 'Dr. R Arun Kumar', role: 'Chief Operating Officer' },
          { src: '/images/hod.png', name: 'Dr. Smitha J A', role: 'Head of Department' },
        ].map((person, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center"
          >
            <img
              src={person.src}
              alt={person.name}
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
              <p className="text-white font-bold text-xl">{person.name}</p>
              <p className="text-gray-200 text-sm mt-1">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Faculty Coordinators */}
<div className="mb-20">
  <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">
    Faculty Coordinators
  </h3>

  <div className="flex flex-wrap justify-center gap-8">
    {[
      { src: '/images/karthika.jpg', name: ' Dr.Karthika K,', role: 'Coordinator' },
      { src: '/images/suguna.jpg', name: 'Prof.Suguna A', role: 'Coordinator' },
    ].map((person, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center w-72"
      >
        <img
          src={person.src}
          alt={person.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
          <p className="text-white font-bold text-lg">{person.name}</p>
          <p className="text-gray-200 text-sm mt-1">{person.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>


    {/* Student Coordinators */}
    <div className="mb-20">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">Student Coordinators</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { src: '/images/guru2.JPG', name: 'Guruprasath M', role: 'Conference Lead' },
          { src: '/images/yeswanthv.jpg', name: 'Yeshwanth K', role: 'Conference Lead' },
           { src: '/images/yeswanthk.jpg', name: 'Yashwanth V', role: 'Pitchathon Lead' },
          { src: '/images/student2.jpg', name: '', role: '' },
         
        ].map((person, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center"
          >
            <img
              src={person.src}
              alt={person.name}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
              <p className="text-white font-bold text-lg">{person.name}</p>
              <p className="text-gray-200 text-sm mt-1">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

{/* {*Photo Gallery Section */}
<section id="photos" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 animate-fade-in-up">
      <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        Memories from ICRCCT
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Glimpses of Innovation
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        A look back at the energy, creativity, and collaboration from past events.
      </p>
    </div> 

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        '/images/gallery/image1.JPG',
        '/images/gallery/image2.JPG',
        '/images/gallery/image3.JPG',
        '/images/gallery/image4.JPG',
        '/images/gallery/image5.JPG',
        '/images/gallery/image6.JPG',
        '/images/gallery/image7.JPG',
        '/images/gallery/image8.JPG',
        '/images/gallery/image9.JPG',
      ].map((src, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
        >
          <img
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white font-semibold text-lg">ICRCCT Moments</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

   </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-8 h-8 text-teal-400" />
                <span className="font-bold text-xl">ICRCCT 2k25</span>
              </div>
              <p className="text-gray-400">
                International Conference on Recent Trends in Computing and Communication Technologies
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {item.label}
                    </button>
                    
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Organized By</h3>
              <p className="text-gray-400 mb-2">Department of Computer Science & Engineering</p>
              <p className="text-gray-400 mb-2">In association with IEEE Computer Society</p>
              <p className="text-gray-400"></p>
              <p className="text-gray-400">Sri Sairam College of Engineering, Anekal</p>
            <div>
              <h3 className="pt-5 font-bold text-lg mb-4"> Conference Coordinators</h3>
              
              
              <p className="text-gray-400 mb-2">Dr.Mahesh A, Prof/CSE</p>
              <p className="text-gray-400 mb-2">Dr.Sumathi P, Assoc.Prof/CSE</p>
              <p className="text-gray-400 mb-2">Dr.Karthika K, AP/CSE</p>
              <p className="text-gray-400 mb-2">Prof.Suguna A , AP/CSE</p>
            </div>
<div>
              <h3 className="pt-5 font-bold text-lg mb-4"> Students Coordinators(Paper Presentation)</h3>
              <p className="text-gray-400 mb-2">Guruprasath M - 4th year - CSE - 75501 22892</p>
              <p className="text-gray-400 mb-2">Yeshwanth K - 3rd year - CSE - 90251 91622</p>

            </div>
            <h3 className="pt-5 font-bold text-lg mb-4"> Students Coordinators (Pitchathon)</h3>
              <p className="text-gray-400 mb-2">Dhviya Dharshini - 3rd year - CSE - 98805 56381</p>
              <p className="text-gray-400 mb-2"> Yashwanth V - 3rd year - CSE - 9901289277</p>
            </div>
                        
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ICRCCT 2k25. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
