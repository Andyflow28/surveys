import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[80vh] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex">
        <div className="w-4/12 p-0 text-center ml-10">
          <p className="mx-0 w-3/6 bg-white text-blue-900 py-5 px-3 text-xl rounded-2xl my-10 font-bold">
            Footer Content
          </p>
          <p className="w-full bg-white mx-0 text-blue-900 px-5 py-5 rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas
            tenetur atque aperiam distinctio est fugiat, ipsam perspiciatis
            eaque nisi, aliquam voluptatem ratione officia temporibus obcaecati
            quibusdam? Doloremque, magni voluptates.
          </p>
        </div>
        <div className="flex justify-around w-4/6 items-center h-[356px]">
          <div className="flex flex-col mt-20">
            <p className="text-4xl text-white">Link</p>
            <div>
              <p className="my-8 text-white">Link 1</p>
              <p className="my-8 text-white">Link 2</p>
              <p className="my-8 text-white">Link 3</p>
              <p className="my-8 text-white">Link 4</p>
            </div>
          </div>
          <div className="flex flex-col mt-20">
            <p className="text-4xl text-white">Link</p>
            <div>
              <p className="my-8 text-white">Link 1</p>
              <p className="my-8 text-white">Link 2</p>
              <p className="my-8 text-white">Link 3</p>
              <p className="my-8 text-white">Link 4</p>
            </div>
          </div>
          <div className="flex flex-col mt-20">
            <p className="text-4xl text-white">Link</p>
            <div>
              <p className="my-8 text-white">Link 1</p>
              <p className="my-8 text-white">Link 2</p>
              <p className="my-8 text-white">Link 3</p>
              <p className="my-8 text-white">Link 4</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-cyan-400 my-10"></div>

      <div className="flex w-full justify-center my-10 items-center">
        <p className="text-5xl text-white font-extrabold">Login for free</p>
        <button className="text-4xl w-40 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-5 text-white rounded-3xl ml-10 hover:text-cyan-500 hover:to-white hover:from-white transition duration-300">
          Login
        </button>
      </div>

      <div className="w-full h-1 bg-cyan-400 mt-10"></div>

      <div className="w-full flex justify-center">
      <div className="flex">
        <div className="w-24 py-5 px-6 bg-[#4867aa] rounded-full mt-10 mx-5">
          <Image
            alt="user icon"
            src="/img/social_media/facebook.png"
            width="64"
            height="64px"
          />
        </div>
        <div className="w-24 py-5 px-6 bg-[#4867aa] rounded-full mt-10 mx-5">
          <Image
            alt="user icon"
            src="/img/social_media/gorjeo.png"
            width="64"
            height="64px"
          />
        </div>
        <div className="w-24 py-5 px-6 bg-[#4867aa] rounded-full mt-10 mx-5">
          <Image
            alt="user icon"
            src="/img/social_media/instagram.png"
            width="64"
            height="64px"
          />
        </div>
        <div className="w-24 py-5 px-6 bg-[#4867aa] rounded-full mt-10 mx-5">
          <Image
            alt="user icon"
            src="/img/social_media/linkedin.png"
            width="64"
            height="64px"
          />
        </div>
        <div className="w-24 py-5 px-6 bg-[#4867aa] rounded-full mt-10 mx-5">
          <Image
            alt="user icon"
            src="/img/social_media/youtube.png"
            width="64"
            height="64px"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
