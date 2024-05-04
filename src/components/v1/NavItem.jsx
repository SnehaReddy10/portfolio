import { useNavigate } from 'react-router-dom';

export function NavItem({ title, url }) {
  const navigate = useNavigate();
  return (
    <div
      className="first:text-green dark:first:text-gradient-r-po dark:hover:bg-slate-800 transition ease-in rounded-xl p-1 first:font-bold text-sky-blue hover:text-slate-300 pl-1 md:pl-2 pr-1 md:pr-2 mt-[0.35rem]"
      onClick={() => navigate(url)}
    >
      <a href={url}>{title}</a>
    </div>
  );
}
