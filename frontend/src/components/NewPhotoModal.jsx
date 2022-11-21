import { useState } from "react";
import { useDispatch } from "react-redux";
import { formView } from "../features/form/formSlice";

const NewMovieModal = () => {
  const [values, setValues] = useState({
    label: "",
    url: "",
  });

  const handleLabelChange = (e) => {
    setValues((prevValues) => {
      return { ...prevValues, label: e.target.value };
    });
  };
  const handleUrlChange = (e) => {
    setValues((prevValues) => {
      return { ...prevValues, url: e.target.value };
    });
  };

  const dispatch = useDispatch();

  const handleCancelBtnClick = (e) => {
    e.preventDefault();
    dispatch(formView());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send a post request to server with the new values
    dispatch(formView());
  };
  return (
    <div className=" bg-[#fff] rounded-[1.2rem] w-[90%] px-[2rem] pt-[2.4rem] pb-[2.3rem]">
      <p className="font-medium mb-[2rem] text-[2.4rem] leading-[3.269rem] text-[#333333]">Add a new photo</p>
      <form action="" onSubmit={handleSubmit}>
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
          onChange={handleLabelChange}
          value={values.label}
        />

        <label
          className="block mb-[0.997rem] mt-[1.85rem] font-medium text-[1.4rem] leading-[1.90rem] text-[#4F4F4F]"
          htmlFor="photo-url"
        >
          Photo URL
        </label>
        <input
          className="placeholder:text-[#bdbdbd] placeholder:truncate outline-none w-[100%] border-[1px] border-[#4F4F4F]  p-[1.80rem] rounded-[1.2rem] font-medium text-[1.4rem] leading-[1.90rem]"
          type="text"
          placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
          onChange={handleUrlChange}
          value={values.url}
        />

        <div className="flex mt-[2rem] gap-[0.90rem] justify-end">
          <button
            onClick={handleCancelBtnClick}
            className="font-medium px-[2rem] text-[1.6rem] leading-[2.179rem] text-[#bdbdbd] "
          >
            Cancel
          </button>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewMovieModal;
