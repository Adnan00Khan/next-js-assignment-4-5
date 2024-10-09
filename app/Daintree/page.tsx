import Image from "next/image";
import Daintre from "../../img/TourFocus-960x800.jpg"

export default function Daintree() {
  return (
    <div className="justify-center w-[100%] h-[100%] bg-[#ecf39e] p-9 flex-wrap grid justify-items-center">
    <h1 className="font-bold mt-1 text-[#132a13] text-3xl text-center ">Daintree Rainforest</h1>
    <Image src={Daintre} alt="" width={500} className="h-64 rounded-xl m-6 "/>
    <h1 className="font-bold m-3 text-[#132a13] text-3xl text-center ">Detail</h1>
    <p className="text-[#132a13] text-xl/8 m-1  hyphens-auto text-center">
    The Daintree Rainforest, also known as the Daintree, is a region on the northeastern coast of Queensland, Australia, about 105 km (65 mi), by road, north of the city of Cairns. Whilst the terms "Daintree Rainforest" and "the Daintree" are not officially defined, it is generally accepted and understood that they refer to the area from the Daintree River north to Cooktown, and from the coastline west to the Great Dividing Range. The popular tourist destination of Mossman Gorge, some 30 km (19 mi) south of the Daintree River, is often (and again, unofficially) included in the definition.
<br />
At around 1,200 square kilometres (460 sq mi), the Daintree is a part of the largest contiguous area of tropical rainforest in Australia, known as the Wet Tropics of Queensland. The region, along with a select number of other rainforest areas on the Australian east coast, collectively form some of the oldest extant rainforest communities in the world. At around 180 million years old, these ancient, self-sustaining forests are nearly 10 million years older than the Amazon of South America (the world’s largest rainforest and top region for biodiversity), and have witnessed dinosaurs, ice ages, and early humans all come and go.
<br />
In 2009 as part of the Q150 celebrations, the Daintree Rainforest was announced as one of the Q150 Icons of Queensland for its role as a "natural attraction".</p>
    </div>
  )
};