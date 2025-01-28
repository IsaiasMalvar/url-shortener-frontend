import sad from "../assets/sad.svg";
const NotFoundPage = () => {
  return (
    <div className="h-[calc(100vh-40px)] mobile:text-5xl gap-y-10 flex flex-col bg-black justify-center items-center text-center text-white md:text-9xl">
      <img src={sad} />
      <span className="uppercase font-mono">
        Bad news buddy, this place is empty.
      </span>
    </div>
  );
};

export default NotFoundPage;
