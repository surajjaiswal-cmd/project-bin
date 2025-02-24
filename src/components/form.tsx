import React from "react";
import { FaSearch } from "react-icons/fa";

interface FormProps {
  data: string;
  setter: (value: string) => void;
}

const Form: React.FC<FormProps> = ({ data, setter }) => {
  return (
    <form
      className="w-3/4 sm:w-2/3 lg:w-2/5 py-1 mt-4 flex justify-around  relative bg-white rounded-[3rem]"
      onSubmit={(e) => {
        e.preventDefault();
        setter("");
      }}>
      <input
        type="text"
        placeholder="Search Projets"
        className=" w-75 relative border-none rounded-full outline-none  ps-1"
        value={data}
        onChange={(e) => setter(e.target.value)}
      />

      <button
        type="submit"
        className="relative rounded-[3rem] text-[#958e8e] p-2 
        ">
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
