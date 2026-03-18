import React from "react";

const FooterTeam = () => {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-lg mt-8 font-bold text-[#1FC7D4]">QuarryLabs Team</h3>
      <p className="text-sm mt-2 text-gray-700 hover:text-gray-900 block">
        <a
          href="https://www.linkedin.com/in/alec-arrambide-91a7b321a/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Alec Arrambide - CEO / Founder
        </a>
      </p>
      <p className="text-sm mt-2 text-gray-700 hover:text-gray-900 block">
        <a
          href="https://tannerhanks.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tanner Hanks - COO
        </a>
      </p>
      <p className="text-sm mt-2 text-gray-700 hover:text-gray-900 block">
        <a
          href="https://www.instagram.com/gabbytookthese/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Gabby Parsons - CMO
        </a>
      </p>
    </div>
  );
};

export default FooterTeam;
