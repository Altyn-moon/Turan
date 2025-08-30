export default function MenuButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="
        /* mobile (по умолчанию) */
        flex items-center justify-between w-full px-4 py-3 rounded-full
        border border-[#009FE3] bg-white text-[#009FE3] font-bold tracking-wider cursor-pointer

        /* desktop */
        xl:justify-end xl:w-fit xl:pl-8 xl:pr-2 xl:py-2
        xl:rounded-full xl:border-2 xl:border-white xl:bg-transparent xl:text-white
      "
    >
      <span className="text-left xl:text-right">{children}</span>

      <span
        className="
          /* mobile icon */
          ml-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#009FE3] text-white

          /* desktop icon */
          xl:ml-4 xl:bg-white xl:text-black xl:w-14 xl:h-14
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M18.7 12.4V5.3h-7.1" />
            <path d="M5.3 18.7 17.1 6.9" />
          </g>
        </svg>
      </span>
    </button>
  );
}
