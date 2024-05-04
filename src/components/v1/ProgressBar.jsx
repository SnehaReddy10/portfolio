export function ProgressBar({ title, width }) {
  return (
    <div className="grid grid-cols-7 h-2 p-4">
      <div className="col-span-1 text-[0.55rem] text-white dark:text-orange-100">
        {title}
      </div>

      <div className="col-span-6 flex flex-grow ml-6 animate-[wiggle_1s_linear_1]">
        <div
          className="items-center h-2 bg-green dark:bg-gradient-r-po"
          style={{ width: `${width - 20}%` }}
        ></div>
        <div className="ml-4 text-[0.55rem]  text-white dark:text-purple-200">
          {' '}
          {width}%
        </div>
      </div>
    </div>
  );
}
