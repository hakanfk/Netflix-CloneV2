import React from "react";

type Props = {
  placeholder: string;
  onClick: any;
  type: string;
};

export default function Input({ placeholder, onClick, type }: Props) {
  return (
    <div className="relative my-4">
      <input
        type={type}
        className="
        block
        w-full
         appearance-none
         bg-neutral-600
         rounded-md
         focus:ring-0
         focus:outline-none
         px-6
         pt-5
         pb-1
         peer
         text-white
      "
        placeholder=""
      />
      <label
        htmlFor={type}
        className="
            text-zinc-400
            absolute
            top-3
            left-4
            transform
            duration-200
             translate-y-0
             scale-100
             z-10
             origin-center
             peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
             peer-focus:-translate-y-4

          "
      >
        {placeholder}
      </label>
    </div>
  );
}
