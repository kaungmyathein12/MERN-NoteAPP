const Header = () => {
  const links = (
    <ul className="flex flex-row items-center gap-x-8 text-sm">
      <li>Source Code</li>
      <li className="text-neutral-400 font-medium">Logout</li>
    </ul>
  );

  return (
    <header className="shadow shadow-black py-6 sticky top-0 bg-[#151515]">
      <nav className="mx-auto w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 flex flex-row justify-between items-center">
        <h2 className="font-semibold text-lg text-black bg-white px-2">
          NoteApp
        </h2>
        {links}
      </nav>
    </header>
  );
};

export default Header;
