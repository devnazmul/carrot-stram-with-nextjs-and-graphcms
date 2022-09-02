
export default function StyleButton({ Icon, Title, Color }) {
  return (
    <>
      <span className={`channelMenu cursor-pointer bg-gradient-to-tr w-10 h-10 md:w-28 md:h-28 ${Color} flex justify-center items-center text-xl font-bold text-white shadow-lg flex-col`}>
        <Icon className="text-xl md:text-4xl justify-between md:mb-3" />{" "}
        <span className="hidden md:block">{Title}</span>
      </span>
    </>
  );
}
