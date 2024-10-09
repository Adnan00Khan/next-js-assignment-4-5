import Image from "next/image";
import tongass from "../../img/Destinations_ParksPublicLands_Tongass National Forest_Hero_(ATIA, Mark Kelley).jpg"

export default function Tongass() {
  return (
    <div className="justify-center w-[100%] h-[100%] bg-[#ecf39e] p-9 flex-wrap grid justify-items-center">
    <h1 className="font-bold mt-1 text-[#132a13] text-3xl text-center ">Tongass National Forest</h1>
    <Image src={tongass} alt="" width={500} className="h-64 rounded-xl m-6 "/>
    <h1 className="font-bold m-3 text-[#132a13] text-3xl text-center ">Detail</h1>
    <p className="text-[#132a13] text-xl/8 m-1  hyphens-auto text-center">
    The Tongass National Forest (/ˈtɒŋɡəs/) in Southeast Alaska is the largest U.S. National Forest at 16.7 million acres (26,100 sq mi; 6,800,000 ha; 68,000 km2). Most of its area is temperate rain forest and is remote enough to be home to many species of endangered and rare flora and fauna. The Tongass, which is managed by the United States Forest Service, encompasses islands of the Alexander Archipelago, fjords and glaciers, and peaks of the Coast Mountains. An international border with Canada (British Columbia) runs along the crest of the Boundary Ranges of the Coast Mountains. The forest is administered from Forest Service offices in Ketchikan. There are local ranger district offices located in Craig, Hoonah, Juneau, Ketchikan, Petersburg, Sitka, Thorne Bay, Wrangell, and Yakutat.
<br />
History
The Alexander Archipelago Forest Reserve was established by Theodore Roosevelt in a presidential proclamation of 20 August 1902. Another presidential proclamation made by Roosevelt, on 10 September 1907, created the Tongass National Forest. On 1 July 1908, the two forests were joined, and the combined forest area encompassed most of Southeast Alaska. Further presidential proclamations of 16 February 1909 (in the last months of the Roosevelt administration) and 10 June, and in 1925 (by Calvin Coolidge) expanded the Tongass. An early supervisor of the forest was William Alexander Langille.
<br />
On 4 September 1971, Alaska Airlines Flight 1866 crashed in the Tongass National Forest, killing all 111 people on board.</p>
    </div>
  )
};