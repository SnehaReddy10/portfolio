export function SRLogo({ fontsize, isLarge }) {
  return (
    <div className="dark:bg-gradient-r-spo rounded-full pr-[2px] pt-[2px] hover:pt-[3px] hover:pr-[3px]  w-max items-center align-middle">
      <div
        className={`dark:bg-black-900 rounded-full ${
          isLarge ? 'px-10' : 'px-6'
        }`}
      >
        <div
          className="text-green transition ease-out dark:text-gradient-r-spo font-bold"
          style={{ fontSize: `${fontsize}rem` }}
          onClick={() => navigate('/')}
        >
          SR
        </div>
      </div>
    </div>
  );
}
