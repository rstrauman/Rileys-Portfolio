import AOS from 'aos';

const navLinks = [
  { name: "Home", href: "#home", icon: "🏡" },
  { name: "About", href: "#about", icon: "🧑" },
  { name: "Projects", href: "#projects", icon: "🖥️" },
  { name: "Contact", href: "#contact", icon: "📞" },
];

const Navbar = () => {

  return (
    <nav className="fixed top-4 sm:top-10 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full sm:w-auto" data-aos="fade-left">
    <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 text-white px-4 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg flex items-center justify-center gap-4 sm:gap-10 w-fit max-w-full mx-auto min-h-[40px] overflow-x-auto">


    {navLinks.map(({ name, href, icon }) => (
      <a
        key={name}
        href={href}
        className="group relative flex items-center font-bold text-sm sm:text-base whitespace-nowrap hover:text-teal-400 transition-all duration-300"
      >
        <span
          className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:inline"
        >
          {icon}
        </span>
        <span className="pl-0 sm:group-hover:pl-4 transition-[padding] duration-300">
          {name}
        </span>
      </a>
    ))}
  </div>
</nav>




  );
};

export default Navbar;



