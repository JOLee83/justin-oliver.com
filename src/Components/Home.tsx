import TypeWriter from './TypeWriter'

const Home = () => {
  return (
    <div tabIndex={-1} className="home outline-none flex h-screen flex-col items-center justify-center bg-[url(/img/background/SeattleSkylineMobile.jpg)] bg-cover text-center text-snow sm:bg-[url(/img/background/SeattleSkyline2.jpg)]">
      <div className="mb-40 leading-12 sm:leading-24 sm:text-shadow-title">
        <div className="font-muli text-[1.8rem] uppercase sm:text-[3rem]">justin oliver lee</div>
        <TypeWriter />
      </div>
    </div>
  );
}

export default Home;
