export default function MenuButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="flex items-center justify-end w-fit !pl-8 !pr-2 !py-2 !pt-2 !rounded-full border-2 border-white blur-gray text-white text-clamp font-bold tracking-wider !cursor-pointer">
      <span>{children}</span>
      <span className="ml-4 w-10 h-10 1xl:w-14 1xl:h-14 flex items-center justify-center rounded-full bg-white p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#000"
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
