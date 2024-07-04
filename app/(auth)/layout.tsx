import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/login_background2.jpg";
import Logo from "../../public/netflix_logo.svg";
import LoginPageFooter from "../components/LoginPageFooter";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
  <> 
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="bg-image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        fill
        priority
      />

      <Image
        src={Logo}
        alt="logo"
        className="absolute left-4 top-4 object-contain md:left-20 md:top-10"
        width={160}
        height={160}
        priority
      />
      {children}
      {/* <LoginPageFooter /> */}
    </div>
  </>     
  );
}
