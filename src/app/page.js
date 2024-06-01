import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src={
            "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png"
          }
          alt="Google Logo"
          width={300}
          height={100}
          priority
          style={{ width: "auto" }}
          
          
        ></Image>
        <HomeSearch/>
      </div>
    </div>
  );
}
