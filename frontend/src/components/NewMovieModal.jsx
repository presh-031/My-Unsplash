const NewMovieModal = () => {
  return (
    <div className="outline bg-[#fff] w-[80%] px-[2rem] pt-[2.4rem] pb-[2.3rem]">
      <p className="font-medium mb-[2rem] text-[2.4rem] leading-[3.269rem] text-[#333333]">Add a new photo</p>
      <form action="">
        <label
          className="block mb-[0.997rem] font-medium text-[1.4rem] leading-[1.90rem] text-[#4F4F4F]"
          htmlFor="photo-name"
        >
          Label
        </label>
        <input
          className="placeholder:text-[#bdbdbd] outline-none w-[100%] border-[1px] border-[#4F4F4F]  p-[1.80rem] rounded-[1.2rem] font-medium text-[1.4rem] leading-[1.90rem]"
          type="text"
          id="photo-name"
          placeholder="Suspendisse elit massa"
        />

        <label
          className="block mb-[0.997rem] mt-[1.85rem] font-medium text-[1.4rem] leading-[1.90rem] text-[#4F4F4F]"
          htmlFor="photo-url"
        >
          Photo URL
        </label>
        <input
          className="placeholder:text-[#bdbdbd] outline-none w-[100%] border-[1px] border-[#4F4F4F]  p-[1.80rem] rounded-[1.2rem] font-medium text-[1.4rem] leading-[1.90rem]"
          type="text"
          placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
        />

        <div className="flex mt-[2rem]">
          <button className="font-medium px-[2rem]  outline text-[1.6rem] leading-[2.179rem] text-[#bdbdbd] ">
            Cancel
          </button>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewMovieModal;
