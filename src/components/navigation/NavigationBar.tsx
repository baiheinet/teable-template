"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

const useBodyScrollPosition = () => {
  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTopValue =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrollTop(scrollTopValue);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollTop;
};

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
  ];
  const scrollTop = useBodyScrollPosition();
  return (
    <nav
      className={
        "bg-white w-full border-b md:border-0 top-0 sticky z-10 transition-shadow " +
        (scrollTop > 0 ? "shadow" : "")
      }
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-sm flex items-center font-semibold">
              <Image
                className="inline-block mr-1"
                src="/favicon/android-72x72.png"
                width={32}
                height={32}
                alt="segplus Logo"
              />
              赛鸽
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-black">
                <a
                  href={item.path}
                  target={item.path.startsWith("http") ? "_blank" : "_self"}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
