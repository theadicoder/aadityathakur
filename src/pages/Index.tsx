import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter, Instagram, Youtube, Globe, MapPin, GraduationCap, Code, Database, Server, Cloud, ShoppingCart, Robot, Figma } from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
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
                <Robot className="w-5 h-5 text-yellow-400" />
                <span>Automation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Current Project</h2>
          <div className="p-6 bg-card-hover rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <ShoppingCart className="w-5 h-5 text-orange-400" />
              <h3 className="text-xl font-bold">E-commerce Platform</h3>
            </div>
            <p className="text-gray-300">Enterprise-level e-commerce website with automation features</p>
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