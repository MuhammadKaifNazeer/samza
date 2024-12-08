import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <div className="flex items-center justify-start gap-1 mt-2">
        <img src="/logo.png" alt="logo" className="w-10 mt-1 object-contain" />
        <h1 className="text-2xl font-semibold">Samza</h1>
      </div>

      <div className="flex items-center justify-end gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5 cursor-pointer"
          onClick={() => window.open("https://bento.me/muhammadkaifnazeer")}
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/MuhammadKaifNazeer/samza")
          }
          className="black_btn"
        >
          Github
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
