
"use client";

export default function WhatsappIcon() {
  // Substitua pelo seu número com código do país e DDD.
  const phoneNumber = "5561991803216";

  const message = encodeURIComponent(
    "Olá! Vim pelo seu portfólio e gostaria de conversar."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale comigo pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      {/* Tooltip */}
      <span
        className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-xl
        border border-white/10 bg-[#17202b] px-4 py-3 text-sm font-medium text-white
        opacity-0 shadow-xl transition-all duration-300
        translate-x-2 group-hover:translate-x-0 group-hover:opacity-100
        group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
      >
        Fale comigo no WhatsApp
      </span>

      {/* Anel animado */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366]/30
        animate-ping opacity-50"
        aria-hidden="true"
      />

      {/* Botão */}
      <span
        className="relative flex h-14 w-14 items-center justify-center rounded-full
        bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30
        transition-all duration-300
        hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40
        active:scale-95 sm:h-16 sm:w-16"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8 sm:h-9 sm:w-9"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.95 11.95 0 0 0 5.82 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.5-8.43ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.87 9.87 0 0 1-1.52-5.25c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.89 7c0 5.46-4.44 9.9-9.91 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </span>
    </a>
  );
}
