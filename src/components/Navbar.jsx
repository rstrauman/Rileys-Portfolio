import AOS from 'aos';

const navLinks = [
  { name: "Home", href: "#home", icon: "🏡" },
  { name: "About", href: "#about", icon: "🧑" },
  { name: "Projects", href: "#projects", icon: "🖥️" },
  { name: "Contact", href: "#contact", icon: "📞" },
];

const Navbar = () => {

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50" data-aos="fade-left">
    <div className="bg-gray-900 text-white px-10 py-4 rounded-full shadow-lg flex items-center justify-center gap-10 w-auto min-w-[400px] mx-auto min-h-[40px]">


    {navLinks.map(({ name, href, icon }) => (
      <a
        key={name}
        href={href}
        className="group relative flex items-center font-bold text-base hover:text-teal-400 transition-all duration-300"
      >
        <span
          className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          {icon}
        </span>
        <span className="pl-6 group-hover:translate-x-1 transition-transform duration-300">
          {name}
        </span>
      </a>
    ))}
  </div>
</nav>




  );
};

export default Navbar;



