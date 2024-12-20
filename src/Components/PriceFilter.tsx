type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div>
      <h4 className={"text-base font-semibold mb-2"}>Max Price</h4>
      <select
        className={"p-2 border rounded-md w-full"}
        value={selectedPrice}
        onChange={(event) =>
          onChange(
            event.target.value ? parseInt(event.target.value) : undefined
          )
        }
      >
        <option value={""}>Select Max Price</option>
        {[50, 100, 200, 300, 500].map((price, key) => (
          <option value={price} key={key}>
            {price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
