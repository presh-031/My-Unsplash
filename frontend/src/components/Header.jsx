import { FaUserAlt } from "react-icons/fa";
import NewPhotoModal from "./NewPhotoModal";

const Header = () => {
  return (
    <header className="flex py-[3.2rem]  items-center justify-between">
      <div className=" flex gap-[0.92rem]  items-end">
        <FaUserAlt size={24} color="#333" />
        <div className="text-[#333]">
          <p className="font-extrabold  mb-[0.028rem] text-[1.4rem] leading-[1.90rem]">My Unsplash</p>
          <p className="font-medium text-[0.9rem] leading-[1.226rem]">devchallenges.io</p>
        </div>
      </div>
      <button className="btn">Add a photo</button>

      {/* Modal and background */}
      <div className="modalBg fixed top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center   bg-black bg-opacity-20">
        <NewPhotoModal />
      </div>
    </header>
  );
};

export default Header;
