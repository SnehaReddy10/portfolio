export function Title({ index, title }) {
  return (
    <div className="font-bold justify-center flex text-white dark:text-orange-100 text-base md:text-3xl tracking-widest p-3">
      <span className="text-sky-blue dark:text-orange-100 mr-5">{index}</span>{' '}
      {title}
    </div>
  );
}
