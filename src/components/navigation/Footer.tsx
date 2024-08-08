import * as React from "react";
import Link from "next/link";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex p-12 bg-zinc-900 text-white sm:justify-between text-sm flex-col sm:flex-row items-center gap-4 mt-10">
      <div>© {year} 赛鸽</div>
      <div className="flex gap-4">
        <a href="mailto:dongke@seg.plus">Email</a>
      </div>
    </div>
  );
}
