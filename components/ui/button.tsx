import clsx from "clsx";

interface KeypadProps {
  onInput: (key: string) => void;
}

const Keypad = ({ onInput }: KeypadProps) => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const handleClick = (key: string) => {
    onInput(key);
  };

  return (
    <div className="grid grid-cols-3 gap-1 w-auto mx-auto">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => handleClick(key)}
          className={clsx(
            "w-20 h-10 text-lg cursor-pointer border-2 rounded-md bg-blue-500 text-white",
            key === "0" ? "col-span-2" : ""
          )}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
