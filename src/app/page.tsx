// pages/index.tsx
"use client";

import React from "react";
import {
  Home as HomeIcon,
  Search,
  Library,
  Cpu,
  MemoryStick as Ram,
  Microchip as GPU,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-slate-900 border-r-2 border-x-blue-950/50 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5  mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-100"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-100"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-100"
            >
              <Library />
              Library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t-2 border-zinc- flex flex-col gap-2">
            {/* <a href="" className="flex items-center gap-3 text-sm text-zinc-400 ">
              <Cpu />
              CPU
            </a>
            <a href="" className="flex items-center gap-3 text-sm text-zinc-400">
            <Ram />
            RAM
            </a>
            <a href="" className="flex items-center gap-3 text-sm text-zinc-400">
              <GPU/>
              GPU
            </a> */}
            <a
              href=""
              className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100"
            >
              Playlist 1
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100"
            >
              Playlist 2
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100"
            >
              Playlist 3
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6 bg-gray-900">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1 ">
              <ChevronLeft />
            </button>
            <button className="rounded-full  bg-black/40 p-1 ">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-4xl mt-10 ">Music Curse</h1>

          <div className="grid grid-cols-3 gap-6 mt-4">
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 "
            >
              <Image
                // className="items-center"
                src="/Korra.png"
                alt="Imagem"
                width={104}
                height={104}
                layout="fixed"
              />
              <strong>Avatar Korra</strong>
              <button className="w-12 h-12 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 "
            >
              <Image
                // className="items-center"
                src="/Hulk.png"
                alt="Imagem"
                width={104}
                height={104}
                layout="fixed"
              />
              <strong>Incredible Hulk</strong>
              <button className="w-12 h-12 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/10 group  rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 "
            >
              <Image
                // className="items-center"
                src="/Naruto.png"
                alt="Imagem"
                width={104}
                height={104}
                layout="fixed"
              />
              <strong>Naruto Uzumaki</strong>
              <button className="w-12 h-12 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 "
            >
              <Image
                // className="items-center"
                src="/Zuko.png"
                alt="Imagem"
                width={104}
                height={104}
                layout="fixed"
              />
              <strong>Prince Zuko</strong>
              <button className="w-12 h-12 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4  overflow-hidden hover:bg-white/20 "
            >
              <Image
                // className="items-center"
                src="/Aang.png"
                alt="Imagem"
                width={104}
                height={104}
                layout="fixed"
              />
              <strong>Avatar Aang</strong>
              <button className="w-12 h-12 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 "
            >
              <Image
                // className="items-center"
                src="/Azula.png"
                alt="Imagem"
                width={104}
                height={104}
                layout="fixed"
              />
              <strong>Princesse Azula</strong>
              <button className="w-12 h-12 flex items-center justify-center  rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10 underline underline-offset-8 ">
            Made by Peter M.
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="bg-white/5 p-2 runded"></div>
          </div>
        </main>
      </div>
      <footer className="bg-slate-950 border-t-2 border-green-950/100 px-6">
        footer
      </footer>
    </div>
  );
}
