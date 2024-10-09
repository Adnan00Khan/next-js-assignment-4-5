import Image from "next/image";
import Kanh from "../../img/kanha-national-park1.jpg"

export default function Kanha () {
  return (
    <div className="justify-center w-[100%] h-[100%] bg-[#ecf39e] p-9 flex-wrap grid justify-items-center">
    <h1 className="font-bold mt-1 text-[#132a13] text-3xl text-center ">Kanha Tiger Reserve</h1>
    <Image src={Kanh} alt="" width={500} className="h-64 rounded-xl m-6 "/>
    <h1 className="font-bold m-3 text-[#132a13] text-3xl text-center ">Detail</h1>
    <p className="text-[#132a13] text-xl/8 m-1  hyphens-auto text-center">
    Kanha Tiger Reserve, also known as Kanha–Kisli National Park, is one of the tiger reserves of India and the largest national park of the state of Madhya Pradesh. The present-day Kanha area is divided into two protected areas, Hallon and Banjar, of 250 and 300 km2 (97 and 116 sq mi), respectively. Kanha National Park was created on 1 June 1955 and was designated tiger reserve in 1973. Today, it encompasses an area of 940 km2 (360 sq mi) in the two districts Mandla and Balaghat.
<br />
Together with a surrounding buffer zone of 1,067 km2 (412 sq mi) and the neighbouring 110 km2 (42 sq mi) Phen Sanctuary, it forms the Kanha Tiger Reserve, which is one of the biggest in the country. This makes it the largest national park in central India.
<br />
The park hosts Bengal tiger, Indian leopard, sloth bear, barasingha and dhole. It is also the first tiger reserve in India to officially introduce a mascot, Bhoorsingh the Barasingha.
<br />

Forest in Kanha
Kanha Tiger Reserve is home to over 1000 species of flowering plants. The lowland forest is a mixture of sal (Shorea robusta) and other mixed-forest trees, interspersed with meadows. The highland forests are tropical moist, dry deciduous type and of a completely different nature from bamboo (Dendrocalamus strictus) on slopes. A notable Indian ghost tree (Sterculia urens) can also be seen in the dense forest.</p>
    </div>
  )
};