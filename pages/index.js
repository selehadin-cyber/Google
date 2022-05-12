import Head from "next/head";
import Avatar from "../components/Avatar";
import { SearchIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image";
// import Image from "next/image";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Hello</h1> */}

      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-500">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* avatar */}
          <Avatar url="https://www.google.com/search?q=ali+lahmar&sxsrf=ALiCzsaDGkGVTNxqORpvQ5K7HVd_yVq3Pg:1652301627884&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjZ292cp9j3AhV1i_0HHfb-CRYQ_AUoAXoECAIQAw&biw=1536&bih=696&dpr=1.25#imgrc=FLVJVL0VNPnVDM" />
        </div>
      </header>
      {/* body */}
      <form>
        <Image
          src="https://www.google.co.uk/images/branding/googlelolo/2x/googlelolo_color_272x920dp.png"
          height={100}
          width={300}
        />
        <div>
          <SearchIcon className="h-10" />
        </div>
      </form>

      {/* footer */}
    </div>
  );
}
