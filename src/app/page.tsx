// "use client";

// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-t from-[#00a884] via-[#00a884] to-[#00a884]">
//       <div className="h-80 w-80 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center relative">
//         <div className="absolute w-16 h-16 bg-white -top-10 rounded-full p-1">
//           <Image
//             src="/img/logo.jpg"
//             alt=""
//             width={64}
//             height={64}
//             className="rounded-full"
//           />
//         </div>
//         <p className="text-zinc-700 text-lg text-center font-bold">
//           Una Idea Más - Diseños & Vectores
//         </p>
//         <p className="text-zinc-500 mb-5">Canal de WhatsApp</p>
//         <Image src="/img/qr.jpg" alt="" width={180} height={180} />
//       </div>
//       <p className="mt-10 mx-2 text-center">
//         Escanea este código QR con la cámara para ver o seguir este canal.
//       </p>

//       <a
//         href="https://whatsapp.com/channel/0029VapBpSdI7BeIMUcfP536"
//         target="_blank"
//         className="mt-5 inline-block px-6 py-3 text-white font-bold rounded-full bg-blue-500 hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-blue-300"
//       >
//         Visitar Canal
//       </a>

//       <p className="text-xs mt-5">~ Catálogo de vectores y diseños ~</p>
//     </main>
//   );
// }

"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-t from-[#00a884] via-[#00a884] to-[#00a884]">
      <div className="my-12 h-auto w-11/12 md:w-3/4 lg:w-1/2 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center relative p-5">
        {/* Logo */}
        <div className="absolute w-16 h-16 bg-white -top-10 rounded-full p-1 shadow-lg">
          <Image
            src="/img/logo.jpg"
            alt="Logo"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>

        {/* Título */}
        <p className="text-zinc-700 text-lg text-center font-bold mt-8">
          Una Idea Más - Diseños & Vectores
        </p>
        <p className="text-zinc-500 mb-5 text-center">Canal de WhatsApp</p>

        {/* Código QR */}
        <Image src="/img/qr.jpg" alt="QR Code" width={180} height={180} />

        {/* Descripción */}
        <p className="mt-5 text-zinc-700 text-center text-sm leading-relaxed">
          Escanea este código QR con tu cámara para unirte a nuestro canal y
          acceder a diseños y vectores exclusivos.
        </p>

        {/* Sección: ¿Qué ofrecemos? */}
        <div className="w-full mt-8 px-5">
          <h2 className="text-zinc-700 text-lg font-semibold text-center">
            🔹 ¿Qué ofrecemos?
          </h2>
          <ul className="mt-3 text-zinc-600 text-sm space-y-2">
            <li>📂 Archivos en alta calidad listos para usar.</li>
            <li>🎨 Diseños versátiles y originales para tus proyectos.</li>
            <li>✨ Vectores personalizables para llevar tus ideas al siguiente nivel.</li>
          </ul>
        </div>

        {/* Sección: Perfecto para */}
        <div className="w-full mt-6 px-5">
          <h2 className="text-zinc-700 text-lg font-semibold text-center">
            🎯 Perfecto para:
          </h2>
          <p className="mt-3 text-zinc-600 text-sm text-center leading-relaxed">
            Publicidad, branding, redes sociales, sublimación, serigrafía y mucho más.
          </p>
        </div>

        {/* Llamado a la acción */}
        <div className="mt-8">
          <a
            href="https://whatsapp.com/channel/0029VapBpSdI7BeIMUcfP536"
            target="_blank"
            className="inline-block px-6 py-3 text-white font-bold rounded-full bg-blue-500 hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-blue-300"
          >
            Visitar Canal
          </a>
        </div>

        {/* Nota final */}
        <p className="text-xs mt-5 text-zinc-500 text-center">
          Únete a nuestra comunidad creativa y lleva tus diseños al siguiente nivel con recursos que hacen la diferencia. 🌟
        </p>
      </div>
    </main>
  );
}
