import { useNavigate } from "react-router-dom";
import { Currencies } from "../consts/Currencies";
import { useCurrencies } from "../context/Context";

const Header = () => {
  const { currency, setCurrency } = useCurrencies();
  const navigate = useNavigate();
  // [#3d9a62]
  return (
    <div className="bg-transparent text-lg absolute w-full left-0 top-0 z-10">
      <div className="container mx-auto py-4 font-semibold flex justify-between">
        <h3 className="md:text-3xl text-xl text-[#E0E0E0]">
          <a href="" onClick={() => navigate("/")}>
            Halalholiday<span className="text-[#e1ab41]">check</span>
          </a>
        </h3>
        <div className="flex gap-5">
          <select
            id="currency"
            value={currency}
            className="bg-transparent text-white focus:border-none border-none outline-none focus:outline-none focus:ring-0 focus:shadow-none rounded-md px-4 py-1 appearance-none cursor-pointer md:text-base text-sm"
            style={{
              background: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"><path d="M10 12l-5-5h10l-5 5z"/></svg>') no-repeat right 0.75rem center`,
              backgroundSize: "1rem",
            }}
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          >
            {Currencies.map((currency) => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};
export default Header;
