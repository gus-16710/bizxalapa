"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-t from-[#00a884] via-[#00a884] to-[#00a884]">
      <div className="h-80 w-80 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center relative">
        <div className="absolute w-16 h-16 bg-white -top-10 rounded-full p-1">
          <Image
            src="/img/logo.jpg"
            alt=""
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <p className="text-zinc-700 text-lg text-center font-bold">
          Una Idea Más - Diseños & Vectores
        </p>
        <p className="text-zinc-500 mb-5">Canal de WhatsApp</p>
        <Image src="/img/qr.jpg" alt="" width={180} height={180} />
      </div>
      <p className="mt-10 mx-2 text-center">
        Escanea este código QR con la cámara para ver o seguir este canal.
      </p>

      <a
        href="https://whatsapp.com/channel/0029VapBpSdI7BeIMUcfP536"
        target="_blank"
        className="mt-5 inline-block px-6 py-3 text-white font-bold rounded-full bg-blue-500 hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-blue-300"
      >
        Visitar Canal
      </a>

      <p className="text-xs mt-5">~ Catálogo de vectores y diseños ~</p>
    </main>
  );
}
