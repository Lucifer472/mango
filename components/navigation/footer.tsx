import { SocialMedia } from "@/constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-main-color w-full h-32 mt-6 flex flex-col items-center justify-center gap-y-6">
      <div className="flex items-center justify-center gap-x-4">
        {SocialMedia.map((s, index) => (
          <Link href={s.link} key={index}>
            <s.icon className="text-white text-2xl" />
          </Link>
        ))}
      </div>
      <p className="text-white w-full text-center">
        All Rights Reserved 2024-2025 © girkesarkeri.com
      </p>
    </footer>
  );
};

export default Footer;
