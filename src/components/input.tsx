import React from "react";

interface id {
  id: string;
  place?: string;
  name: string;
}

const Input: React.FC<id> = ({ id, place, name }: id) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[1.2rem] font-bold text-[#565656] m-2 mt-5 ">
        {id.toLocaleUpperCase()}
      </label>
      <br />
      <input
        id={id}
      name={name}
        type="text"
        className="form-control custom-select border-[#969494] border-2 rounded-2xl h-14 text-black text-[1.25rem]"
        placeholder={place ? `${place}` : `Project ${id.toUpperCase()}`}
        required
      />
    </div>
  );
};

export default Input;
