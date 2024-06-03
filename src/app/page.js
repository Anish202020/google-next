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
            "https://i.ibb.co/WpstKbC/Elizabeth-and-Richard.jpg"
          }
          alt="Google Logo"
          width={300}
          height={100}
          priority
          className="rounded-md shadow-2xl"
          style={{ width: "auto" }}
          
          
        ></Image>
        <HomeSearch/>
      </div>
    </div>
  );
}
