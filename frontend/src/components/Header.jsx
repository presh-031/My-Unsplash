import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex py-[3.2rem] outline items-center justify-between">
      <div className="outline flex gap-[0.92rem]  items-end">
        <FaUserAlt size={24} color="#333" />
        <div className="text-[#333]">
          <p className="font-extrabold  mb-[0.028rem] text-[1.4rem] leading-[1.90rem]">My Unsplash</p>
          <p className="font-medium text-[0.9rem] leading-[1.226rem]">devchallenges.io</p>
        </div>
      </div>
      <div>
        <button className="bg-[#3DB46D] text-[#fff] rounded-[1.2rem] px-[2.0rem] py-[1.8rem] font-bold text-[1.6rem] leading-[2.179rem]">
          Add a photo
        </button>
      </div>
    </header>
  );
};

export default Header;
