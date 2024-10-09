import Image from "next/image";
import amazon from "../img/amazon.png"
import Link from "next/link";
import congolain from "../img/1253_6fedaa1b4bd6d9e-1920x1080.jpeg"
import Daintre from "../img/TourFocus-960x800.jpg"
import Kanh from "../img/kanha-national-park1.jpg"
import monteverde from "../img/mal.png"
import tongass from "../img/Destinations_ParksPublicLands_Tongass National Forest_Hero_(ATIA, Mark Kelley).jpg"

export default function home() { 
  return (
    <div className="flex justify-center w-[100%] h-[100%] bg-[#ecf39e] p-11 flex-wrap">
      <div className=" w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px]  h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] bg-[#31572c] sm:bg-[#31572c] md:bg-[#31572c] lg:bg-[#31572c]  rounded-xl shadow-xl m-3 relative">
      <Image src={amazon} alt="" width={250} className="h-32 rounded-xl"/>
      <h1 className="font-bold mt-1 text-[#ecf39e] text-center">Amazon Rainforest</h1>
      <p className="text-[#ecf39e] text-sm/4 m-1 justify-center text-center">The Amazon rainforest, covering much of northwestern Brazil and extending into Colombia, Peru and other South American countries, is the world’s largest tropical rainforest,</p>
      <Link href="./amazon"><button className=" rounded-xl bg-[#90a955] w-[100px] mt-1 ml-8 justify-center absolute bottom-4 left-10 text-center text-[#132a13] border-solid border-2 border-[#132a13]">More</button></Link>
      </div>
      <div className=" w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px]  h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] bg-[#31572c] sm:bg-[#31572c] md:bg-[#31572c] lg:bg-[#31572c]  rounded-xl shadow-xl m-3 relative">
      <Image src={congolain} alt="" width={250} className="h-32 rounded-xl"/>
      <h1 className="font-bold mt-1 text-[#ecf39e] text-center">Congolian rainforests</h1>
      <p className="text-[#ecf39e] text-sm/4 m-1 justify-center text-center">The Congolian rainforest is the world's second-largest tropical forest, after the Amazon rainforest. It covers over 500,000,000 acres (2,000,000 km2) across six countries and contains a quarter of the world's remaining tropical forest.</p>
      <Link href="./Congolian-rainforests"><button className="border-solid border-2 border-[#132a13] rounded-xl bg-[#90a955] w-[100px] mt-1 ml-8 justify-center absolute bottom-4 left-10 text-center text-[#132a13]">More</button></Link>
      </div>
      <div className=" w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px]  h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] bg-[#31572c] sm:bg-[#31572c] md:bg-[#31572c] lg:bg-[#31572c]  rounded-xl shadow-xl m-3 relative">
      <Image src={Daintre} alt="" width={250} className="h-32 rounded-xl"/>
      <h1 className="font-bold mt-1 text-[#ecf39e] text-center">Daintree Rainforest</h1>
      <p className="text-[#ecf39e] text-sm/4 m-1 justify-center text-center">The Daintree Rainforest, also known as the Daintree, is a region on the northeastern coast of Queensland, Australia, about 105 km (65 mi), by road, north of the city of Cairns.</p>
      <Link href="./Daintree"><button className="border-solid border-2 border-[#132a13] rounded-xl bg-[#90a955] w-[100px] mt-1 ml-8 justify-center absolute bottom-4 left-10 text-center text-[#132a13]">More</button></Link>
      </div>
      <div className=" w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px]  h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] bg-[#31572c] sm:bg-[#31572c] md:bg-[#31572c] lg:bg-[#31572c]  rounded-xl shadow-xl m-3 relative">
      <Image src={Kanh} alt="" width={250} className="h-32 rounded-xl"/>
      <h1 className="font-bold mt-1 text-[#ecf39e] text-center">Kanha Tiger Reserve</h1>
      <p className="text-[#ecf39e] text-sm/4 m-1 justify-center text-center">Kanha Tiger Reserve, also known as Kanha–Kisli National Park, is one of the tiger reserves of India and the largest national park of the state of Madhya Pradesh</p>
     <Link href="./Kanha"><button className="border-solid border-2 border-[#132a13] rounded-xl bg-[#90a955] w-[100px] mt-1 ml-8 justify-center absolute bottom-4 left-10 text-center text-[#132a13]">More</button></Link>
      </div>
      <div className=" w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px]  h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] bg-[#31572c] sm:bg-[#31572c] md:bg-[#31572c] lg:bg-[#31572c]  rounded-xl shadow-xl m-3 relative">
      <Image src={monteverde} alt="" width={250} className="h-32 rounded-xl"/>
      <h1 className="font-bold mt-1 text-[#ecf39e] text-center">Monteverde Cloud Forest Reserve</h1>
      <p className="text-[#ecf39e] text-sm/4 m-1 justify-center text-center">The Monteverde Cloud Forest Reserve (Spanish: Reserva Biológica Bosque Nuboso Monteverde)</p>
      <Link href="./Monteverde"><button className="border-solid border-2 border-[#132a13] rounded-xl bg-[#90a955] w-[100px] mt-1 ml-8 justify-center absolute bottom-4 left-10 text-center text-[#132a13]">More</button></Link>
      </div>
      <div className=" w-[250px] sm:w-[250px] md:w-[250px] lg:w-[250px]  h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] bg-[#31572c] sm:bg-[#31572c] md:bg-[#31572c] lg:bg-[#31572c]  rounded-xl shadow-xl m-3 relative">
      <Image src={tongass} alt="" width={250} className="h-32 rounded-xl"/>
      <h1 className="font-bold mt-1 text-[#ecf39e] text-center">Tongass National Forest</h1>
      <p className="text-[#ecf39e] text-sm/4 m-1 justify-center text-center">The Tongass National Forest (/ˈtɒŋɡəs/) in Southeast Alaska is the largest U.S. National Forest at 16.7 million acres (26,100 sq mi; 6,800,000 ha; 68,000 km2).</p>
      <Link href="./Tongass"><button className="border-solid border-2 border-[#132a13] rounded-xl bg-[#90a955] w-[100px] mt-1 ml-8 justify-center absolute bottom-4 left-10 text-center text-[#132a13]">More</button></Link>
      </div>
    </div>
  );
}