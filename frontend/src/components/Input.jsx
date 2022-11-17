import { AiOutlineSearch } from "react-icons/ai";

const Input = () => {
  return (
    <div className="border-[1px] w-[60%]  rounded-[1.2rem] border-[#bdbdbd]  flex   items-center gap-[2rem] py-[1.8rem] px-[1.9rem] ">
      <AiOutlineSearch color="#BDBDBD" className="w-[1.705rem] h-[1.705rem]" />
      <input
        type="text"
        placeholder="Search by name"
        className="outline-none w-[80%] text-[1.4rem] leading-[1.907rem] placeholder:text-[#BDBDBD]"
      />
    </div>
  );
};

export default Input;
