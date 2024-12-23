import { useState, useEffect, useCallback } from "react";
import { Github, Linkedin, Mail, Twitter, Instagram, Youtube, Globe, MapPin, GraduationCap, Code, Database, Server, Cloud, ShoppingCart, Bot, Figma, Boxes } from "lucide-react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white relative">
      <Particles
        className="absolute inset-0 -z-10 pointer-events-none"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#121212",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Aaditya Thakur</span>
          </h1>
          <div className="flex items-center gap-2 text-gray-300 mb-4">
            <MapPin className="w-4 h-4" />
            <span>Delhi, India</span>
            <span className="mx-2">•</span>
            <GraduationCap className="w-4 h-4" />
            <span>D.T.A Public School</span>
          </div>
          <p className="text-gray-300 text-lg">
            IT Expert, Tech Enthusiast, Developer at Google
          </p>
        </div>

        {/* Current Status Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6">Currently</h2>
          <ul className="space-y-4 text-gray-300">
            <li>• Participating in Microsoft workshop</li>
            <li>• Certified Google Cloud Developer</li>
            <li>• 9th grade student</li>
            <li className="mt-8 font-semibold">Learning:</li>
            <li>• Cloud Computing</li>
            <li>• Full Stack Development</li>
            <li>• Cybersecurity</li>
          </ul>
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <h2 className="text-lg text-gray-400 mb-4">Current Time in Delhi</h2>
          <p className="text-3xl font-bold font-mono">
            {time.toLocaleTimeString()}
          </p>
        </div>

        {/* Skills Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-green-400" />
                <span>Backend Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-400" />
                <span>Database Management</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-cyan-400" />
                <span>Cloud Computing</span>
              </div>
              <div className="flex items-center gap-2">
                <Figma className="w-5 h-5 text-pink-400" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-yellow-400" />
                <span>Automation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-card-hover rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingCart className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl font-bold">E-Commerce Website</h3>
              </div>
              <p className="text-gray-300 mb-2">A fully functional e-commerce platform with user authentication and secure payments.</p>
              <p className="text-sm text-gray-400">Technologies: HTML, CSS, JavaScript, Node.js, MongoDB</p>
            </div>
            
            <div className="p-6 bg-card-hover rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold">Personal Blog</h3>
              </div>
              <p className="text-gray-300 mb-2">Blog platform with commenting and tagging features.</p>
              <p className="text-sm text-gray-400">Technologies: React.js, Express.js</p>
            </div>
            
            <div className="p-6 bg-card-hover rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingCart className="w-5 h-5 text-green-400" />
                <h3 className="text-xl font-bold">AI E-Commerce</h3>
              </div>
              <p className="text-gray-300 mb-2">Enhanced e-commerce with AI-powered recommendations.</p>
              <p className="text-sm text-gray-400">Technologies: React.js, Node.js, TensorFlow</p>
            </div>
            
            <div className="p-6 bg-card-hover rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Boxes className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold">Python Game</h3>
              </div>
              <p className="text-gray-300 mb-2">Interactive Python game with multiple levels and scoring.</p>
              <p className="text-sm text-gray-400">Technologies: Python, Pygame</p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="https://github.com/theadicoder" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/iamtheadicoder" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:aadityathakur.ayu243@gmail.com"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/theadicoder" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/theadicoder" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://youtube.com/@theadicoder" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="https://theadicoder.netlify.app" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Globe className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;