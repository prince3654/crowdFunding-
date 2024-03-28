import React, { useEffect, useState } from "react";
import { useMetamask } from "@thirdweb-dev/react";
import { useSelector, useDispatch } from "react-redux";
import { useContract } from "@thirdweb-dev/react";

const Header = () => {
  const connectWithMetamask = useMetamask();
  let [HeadState, setHeadState] = useState({
    Address: null,
    Balance: null,
  });
  let Dispatch = useDispatch();

  let { contract } = useContract('0xd34D612057ee13cbFeb4052811c4ea7fef381644');
  let ConnectWallet = async () => {
    connectWithMetamask().then(async (res) => {
      Dispatch({ type: "SetMetamask", payload: res });
      Dispatch({ type: "SetContract", payload: contract });

      setHeadState({
        ...HeadState,
        Address: await res?.getAddress(),
        Balance: await res?.getBalance(),
      });
    });
  };

  useEffect(() => {
    ConnectWallet();
  }, []);

  return (
    <div className="bg-[#34495e] p-2 text-white rounded-sm shadow-md backdrop-filter backdrop-blur-xl bg-opacity-60 border-[1px] border-gray-500 flex sm:flex-row sm:justify-between sm:items-center flex-col gap-5 sm:gap-0">
     
    <p className="font-medium font-serif text-[#50d71e] italic decoration-4 hover:list-disc">CODE_ZERO</p>
      <p className="bg-[#34495e] outline-none border-[1px] border-[#2effaf] p-2 rounded-[5px] ">
        Account : <span>{HeadState?.Address}</span>{" "}
        <span className="text-black">||</span> Balance{" "}
        <span>
          {HeadState?.Balance?.displayValue?.slice(0, 5)}{" "}
          <span className="text-red-500">{HeadState?.Balance?.symbol}</span>
        </span>
      </p>
    </div>
  );
};

export default Header;
