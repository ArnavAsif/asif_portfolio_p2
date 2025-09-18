import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto py-16 md:py-20 lg:py-28 flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img2}
          alt="profile"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Assalamu Alaikum! I'm Arnav Asif
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        MERN Stack Developer based in Bangladesh
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I am a MERN Developer from Bangladesh, I am junior developer but i have
        completed different types of full-stack projects
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          <span>Contact Me</span>
          <Image
            src={assets.right_arrow_white}
            alt="right-arrow"
            className="w-4"
          />
        </a>
        <a
          href="/ASIF_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          <span>My Resume</span>
          <Image src={assets.download_icon} alt="right-arrow" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
