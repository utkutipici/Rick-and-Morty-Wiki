export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-cyan-500/30 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400 font-bold text-lg">
              R&M WIKI
            </span>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Made by
              <span className="text-white font-medium"> Cavit Utku Tipici</span>
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="https://rickandmortyapi.com/"
              className="text-gray-400 hover:text-cyan-400 transition uppercase tracking-wide"
            >
              API
            </a>
            <a
              href="https://github.com/utkutipici"
              className="text-gray-400 hover:text-cyan-400 transition uppercase tracking-wide"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
