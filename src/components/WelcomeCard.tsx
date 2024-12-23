import { MapPin, GraduationCap } from "lucide-react";

export const WelcomeCard = () => {
  return (
    <div className="bento-card col-span-2">
      <div className="flex items-start gap-6">
        <img 
          src="/lovable-uploads/d9707ee0-47c0-4ed8-81d8-20ee636bb7f3.png"
          alt="Aaditya Thakur"
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-400"
        />
        <div className="text-left">
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
      </div>
    </div>
  );
};