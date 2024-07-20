import Carousel from './Carousel';
import { ProgressBar } from './ProgressBar';
import { Title } from './Title';

let id = 1;

const technicalSkills = [
  { title: 'JAVASCRIPT', width: '90' },
  { title: 'NODEJS', width: '85' },
  { title: 'REACT', width: '80' },
  { title: 'EXPRESSJS', width: '80' },
  { title: 'TYPESCRIPT', width: '90' },
  { title: 'NESTJS', width: '80' },
  { title: 'ANGULAR', width: '70' },
];

const elements = [
  { img: 'nodejs', title: 'Node Js' },
  { img: 'js', title: 'Javascript' },
];

export function Professional() {
  return (
    <div className="mt-[2rem] md:mt-[5rem] md:w-[35rem]">
      <Title index={'01'} title={'PROFESSIONAL'} />
      <div className="text-white text-xs md:text-base tracking-widest text-center">
        MY KNOWLEDGE LEVEL IN SOFTWARE
      </div>

      <div className="relative mt-10">
        {technicalSkills.map((x) => {
          id++;
          return <ProgressBar key={id} title={x.title} width={x.width} />;
        })}
      </div>

      {/* <div className="grid grid-cols-6 gap-10">
        {elements.map((x) => (
          <div className="text-center flex flex-col items-center border border-orange-50 shadow-md shadow-slate-400 rounded-md w-max hover:bg-gradient-r-spo">
            <div className="hover:bg-black hover:p-[10px] hover:m-[2px] hover:rounded-sm transition-all ease-in">
              <img
                src={`/src/assets/imgs/${x.img}.png`}
                alt="js"
                className="h-8 w-8 rounded-full"
              />
              <p>{x.title}</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="bg-gradient-r-spo p-[1px] h-10 w-10">
        <div className="bg-black m-[1px] h-full w-full"></div>
      </div> */}
    </div>
  );
}
