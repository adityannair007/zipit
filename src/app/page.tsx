import Image from "next/image";
import mountain from "./mountain.jpg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center dark:bg-slate-900 h-screen p-4 gap-2">
        <h1 className="text-7xl text-orange-500">Zipit</h1>
        <h2 className="dark:text-white text-lg">
          Connect with people across the world
        </h2>
      </div>
    </>
  );
}
