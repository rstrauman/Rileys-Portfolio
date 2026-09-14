import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Techstack = () => {
  useEffect(() => {
    AOS.init({
  duration: 800,
  once: false, 
  mirror: true, 
});

  }, [])

  const technologies = [
    { icon: "devicon-react-original colored", label: "React" },
    { icon: "devicon-nodejs-plain colored", label: "Node.js" },
    { icon: "devicon-json-plain text-white", label: "JSON" },
    { icon: "devicon-express-original text-white", label: "Express" },
    { icon: "devicon-tailwindcss-original colored", label: "Tailwind CSS" },
    { icon: "devicon-vitejs-plain colored", label: "Vite" },
    { icon: "devicon-github-original text-white", label: "GitHub" },
    { icon: "devicon-git-plain colored", label: "Git" },
    { icon: "devicon-visualstudio-plain colored", label: "Visual Studio" },
    { icon: "devicon-vscode-plain colored", label: "VS Code" },
    { icon: "devicon-unity-plain colored", label: "Unity" },
    { icon: "devicon-godot-plain colored", label: "Godot" },
    { icon: "devicon-npm-original-wordmark colored", label: "NPM" },
    { icon: "devicon-microsoftsqlserver-plain colored", label: "SSMS" },
    { icon: "devicon-jira-plain colored", label: "Jira" },
    { icon: "devicon-nuget-original colored", label: "NuGet" },
    { icon: "devicon-supabase-plain colored", label: "Supabase" },
    { icon: "devicon-firebase-plain colored", label: "Firebase" },
  ];

  const languages = [
    { icon: "devicon-html5-plain colored", label: "HTML5" },
    { icon: "devicon-css3-plain-wordmark colored", label: "CSS3" },
    { icon: "devicon-javascript-plain colored", label: "JavaScript" },
    { icon: "devicon-csharp-plain colored", label: "C#" },
    { icon: "devicon-typescript-plain colored", label: "TypeScript" },
    { icon: "devicon-dot-net-plain colored", label: ".NET" },
    { icon: "devicon-cplusplus-plain colored", label: "C++" },
    { icon: "devicon-java-plain colored", label: "Java" },
    { icon: "devicon-dart-plain colored", label: "Dart" },
    { icon: "devicon-flutter-plain colored", label: "Flutter" },
    { icon: "devicon-php-plain colored", label: "PHP" },
    { icon: "devicon-mysql-original colored", label: "SQL" },
    { icon: "devicon-reactnative-original colored", label: "React Native" },
    { icon: "devicon-entityframeworkcore-plain colored", label: "EF Core" },
  ];

  return (
    <div className="flex justify-center mt-12 w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap items-stretch justify-center md:justify-between gap-10 w-full">
        {/* Technologies Column */}
        <div className="w-full md:w-[48%] flex flex-col gap-6">
          {/* Title Box */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 px-6 py-8 rounded-xl w-full max-w-[420px] text-center space-y-6 mx-auto min-h-[75px] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap" style={{ color: "var(--color-primary-500)" }}>
              Technologies I Use
            </h2>
          </div>

          {/* Icons Box */}
          <section className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl w-full text-center mx-auto flex flex-col justify-center items-center min-h-[400px] flex-1 px-6 sm:px-10 py-8" data-aos="fade-right">
         
            <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto">
              {technologies.map(({ icon, label }, index) => (
                <div
                  key={label}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform"
                >
                  <i className={`${icon} text-5xl`} />
                  <span className="text-sm text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Languages Column */}
        <div className="w-full md:w-[48%] flex flex-col gap-6">
          {/* Title Box */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 px-6 py-8 rounded-xl w-full max-w-[420px] text-center space-y-6 mx-auto min-h-[75px] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap" style={{ color: "var(--color-primary-500)" }}>
              Languages I Program With
            </h2>
          </div>

          {/* Icons Box */}
          <section
            className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl w-full text-center mx-auto flex flex-col justify-center items-center min-h-[400px] flex-1 px-6 sm:px-10 py-8" data-aos="fade-left"
          >
            <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto">
              {languages.map(({ icon, label }, index) => (
                <div
                  key={label}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform"
                >
                  <i className={`${icon} text-5xl`} />
                  <span className="text-sm text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Techstack;



