import { Title } from './Title';

const slides = [
  'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg',
  'https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/286763/pexels-photo-286763.jpeg?auto=compress&cs=tinysrgb&w=600',
];
export function Projects() {
  return (
    <div className="mt-10">
      <Title index={'02'} title={'PROJECTS'} />
      <div className="text-white text-xs md:text-base tracking-widest text-center">
        MY KNOWLEDGE LEVEL IN SOFTWARE
      </div>
      <div className="border-[1px] mt-10 rounded-sm shadow-lg shadow-slate-600 border-pink-50 p-10 m-10w-[90vw] md:w-[35rem] px-2 md:px-[7rem] md:pt-[2rem] py-10 md:pb-[5rem]"></div>
    </div>
  );
}
