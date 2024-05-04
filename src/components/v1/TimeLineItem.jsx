export function TimeLineItem({
  duration,
  title,
  role,
  description,
  pt,
  pl,
  pr,
  className,
}) {
  return (
    <li
      className={`mb-10 ms-3 md:ms-4 pr-10`}
      style={{
        paddingTop: `${pt}rem`,
        paddingLeft: pl ? `${window.outerWidth > '768' ? pl : pl / 10}rem` : 0,
        paddingRight: pr ? `${window.outerWidth > '768' ? pr : pr / 10}rem` : 0,
      }}
    >
      <div className="absolute w-[0.60rem] h-[0.60rem] bg-green rounded-full -start-[0.340rem] dark:bg-gradient-b-spo"></div>
      <div className={`${className}`}>
        <div
          className={`hover:scale-105 hover:-translate-y-1 transition-all ease`}
        >
          <time className="mb-1 font-bold text-xs md:text-sm tracking-wider text-green dark:text-purple-200">
            {duration}
          </time>
          <div className="text-[0.60rem] md:text-[0.80rem] mt-1 uppercase text-white dark:text-white">
            {title}
          </div>

          <div className="text-xs md:text-sm mt-4 font-semibold text-white dark:text-white">
            {role}
          </div>
          <p className="mb-4 mt-2 text-[0.5rem] md:text-[0.6rem] tracking-wider font-normal text-sky-blue dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}
