import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative z-[999] w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">

            <div className="mb-[20px] text-[15px] text-center">
                &copy; MD SHAMIRUL ISLAM 2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer