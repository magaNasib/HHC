import React, { Dispatch, SetStateAction, useState } from "react";
import "./Counter.css";
import PersonIcon from "../../assets/icons/PersonIcon";
type CounterProps = {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
};

const Counter: React.FC<CounterProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex justify-between items-center space-x-4">
      <span>{label}</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            onChange(value - 1);
          }}
          className="px-3 py-1 border rounded-lg"
          disabled={value <= 0}
        >
          -
        </button>
        <span>{value}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            onChange(value + 1);
          }}
          className="px-3 py-1 border rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

type AdjustableComponentProps = {
  adults: number;
  children: number;
  rooms: number;
  travelingWithPets: boolean;
  setAdults: Dispatch<SetStateAction<number>>;
  setChildren: Dispatch<SetStateAction<number>>;
  setRooms: Dispatch<SetStateAction<number>>;
  setTravelingWithPets?: Dispatch<SetStateAction<boolean>>;
  position?: "top" | "bottom";
};

const AdjustableComponent: React.FC<AdjustableComponentProps> = ({
  adults,
  children,
  rooms,
  travelingWithPets,
  setAdults,
  setChildren,
  setRooms,
  setTravelingWithPets,
  position,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pr-8">
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="text-white font-semibold md:text-base text-sm flex items-center space-x-2"
      >
        {adults} adults · {children} children · {rooms} rooms
        <PersonIcon />
      </button>

      {isOpen && (
        <div
          className={`space-y-4 absolute left-8 ${
            position ? position : "top"
          }-8 p-4 bg-white shadow-md rounded-lg`}
        >
          <Counter label="Adults" value={adults} onChange={setAdults} />
          <Counter label="Children" value={children} onChange={setChildren} />
          <Counter label="Rooms" value={rooms} onChange={setRooms} />

          <div className="flex justify-between items-center">
            <span className="pr-3">Traveling with pets?</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={travelingWithPets}
                onChange={() =>
                  setTravelingWithPets &&
                  setTravelingWithPets(!travelingWithPets)
                }
                className="toggle-input"
              />
              <span className="toggle-label"></span>
            </label>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default AdjustableComponent;
