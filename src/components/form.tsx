import { Search } from "lucide-react";
import React from "react";

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
        className=" w-75 relative border-none rounded-full outline-none "
        value={data}
        onChange={(e) => setter(e.target.value)}
      />

      <button
        type="submit"
        className="relative rounded-[3rem] text-white bg-black p-2 
        ">
        <Search />
      </button>
    </form>
  );
};

export default Form;
