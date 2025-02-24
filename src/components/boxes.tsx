"use client";
import { Boxes } from "./ui/background-boxes";
import Form from "./form";

interface FormProps {
  showForm?: boolean;
  inputData?: string;
  setter?: (value: string) => void;
}


export function BoxesFile({ showForm, inputData, setter }: FormProps) {
  return (
    <div className="h-[35rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <Boxes />
      <h1 className="text-white bg-black  py-3 rounded-[3rem] relative z-10 text-center font-bold w-3/4 sm:w-2/3 lg:w-2/5">
        Welcome To Project Bin
      </h1>
      <p className="text-center mt-3 text-white  wait-400 font-semibold text-[1.3rem] relative z-20 banner-text">
        Where Project Meet Like-Minded People
      </p>
      {showForm && (
        <Form data={inputData ?? ""} setter={setter ?? (() => {})} />
      )}
    </div>
  );
}
