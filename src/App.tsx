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
              <span className="text-teal-200">and Communication Technologies</span>
            </h1>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <p className="text-2xl sm:text-3xl font-bold text-white">ICRCCT 2k25</p>
            </div>
            <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-4xl mx-auto font-light">
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('about-paper')}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Join Paper Presentation
              </button>
              <button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* Conference Info Bar */}
      <section className="bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Conference Date</p>
                <p className="font-semibold text-gray-900">November 21 & 22, 2025</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Venue</p>
                <p className="font-semibold text-gray-900">Sri Sairam College of Engineering</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Expected Participants</p>
                <p className="font-semibold text-gray-900">500+ Global Attendees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Paper Presentation Section */}
      <section id="about-paper" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Research Excellence
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About Paper Presentation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Welcome to the International Paper Presentation Conference, a premier event dedicated to advancing research and collaboration in the field of computer science. This conference aims to bring together scholars, researchers, and industry professionals from around the globe to share their insights, innovations, and findings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Present cutting-edge research to a global audience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Network with leading researchers and industry experts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Receive valuable feedback from peer reviewers</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300 shadow-xl">
                  <BookOpen className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Research Papers</h3>
                  <p className="text-blue-100">Share your groundbreaking research</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300 shadow-xl mt-8">
                  <Award className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Best Paper Awards</h3>
                  <p className="text-teal-100">Recognition for excellence</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300 shadow-xl -mt-8">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Peer Review</h3>
                  <p className="text-purple-100">Rigorous evaluation process</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300 shadow-xl">
                  <Globe className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
                  <p className="text-orange-100">International platform</p>
                </div>
              </div>
            </div>
          </div>
                   <button
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
               <a
                href="https://forms.gle/qdWGK7idbRhGfCjF9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block text-center"
                >
                Apply for Pitchathon
                </a>
              </button>
        </div>
      </section>

      {/* About Pitchathon Section */}
      <section id="about-pitchathon" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-xl">
                      <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Business Strategy</h4>
                      <p className="text-sm text-gray-600">Refine your approach</p>
                    </div>
                    <div className="text-center p-6 bg-teal-50 rounded-xl">
                      <Lightbulb className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                      <p className="text-sm text-gray-600">Creative solutions</p>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-xl">
                      <TrendingUp className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Growth</h4>
                      <p className="text-sm text-gray-600">Accelerate success</p>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-xl">
                      <Users className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">Networking</h4>
                      <p className="text-sm text-gray-600">Connect with investors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-right">
              <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Entrepreneurship Excellence
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About Pitchathon
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Pitchathon provides a dynamic platform for participants to refine their business strategies, enhance their presentation skills, and gain valuable feedback from seasoned investors. Beyond potential funding, participants build connections with industry leaders and collaborators. The event fosters innovation, encouraging entrepreneurs to develop creative solutions and accelerate their journey toward success in the competitive marketplace.
              </p>
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-3">What You'll Gain:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Expert feedback from seasoned investors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Potential funding opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Network with industry leaders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Enhanced presentation skills</span>
                  </li>
                </ul>
              </div>
                <a
                href="https://forms.gle/cPPuEKHizAX8TPjn8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block text-center"
                >
                Apply for Pitchathon
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

            {/* Important Dates Section for pitchathon*/}
      <section id="dates" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Mark Your Calendar
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Important Dates for Pitchathon</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with key deadlines and milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Pitch Submission', date: 'November 17, 2025', icon: BookOpen },
              // { title: 'Notification', date: 'November 20, 2024', icon: Mail },
              // { title: 'Registration Deadline', date: 'December 5, 2024', icon: Calendar },
              { title: 'Conference Dates', date: 'December 15-16, 2024', icon: Award },
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
              <h3 className="pt-5 font-bold text-lg mb-4"> Conference Cooridinators</h3>
              <p className="text-gray-400 mb-2">Dr.Karthika K, AP/CSE</p>
              <p className="text-gray-400 mb-2">Prof.Suguna A ,AP/CSE</p>
            </div>
<div>
  <div></div>
              <h3 className="pt-5 font-bold text-lg mb-4"> Students Cooridinators</h3>
              <p className="text-gray-400 mb-2">Guruprasath M - 4th year - CSE - 7550122892</p>
              <p className="text-gray-400 mb-2">Yeshwanth K - 3rd year - CSE - 9025191622</p>

            </div>
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
