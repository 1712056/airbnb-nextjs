import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] md:px-auto py-2 rounded-full shadow-sm hover:shadow-sm transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm border-r-[1px] font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block border-r-[1px] text-sm font-semibold px-6 flex-1 text-center">
          Anywhere
        </div>
        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block">Guest</div>
          <div
            className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
