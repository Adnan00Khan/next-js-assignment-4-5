import Image from "next/image";
import congolain from "../../img/1253_6fedaa1b4bd6d9e-1920x1080.jpeg"

export default function Congolian() {
  return (
    <div className="justify-center w-[100%] h-[100%] bg-[#ecf39e] p-9 flex-wrap grid justify-items-center">
    <h1 className="font-bold mt-1 text-[#132a13] text-3xl text-center ">Congolian rainforests</h1>
    <Image src={congolain} alt="" width={500} className="h-64 rounded-xl m-6 "/>
    <h1 className="font-bold m-3 text-[#132a13] text-3xl text-center ">Detail</h1>
    <p className="text-[#132a13] text-xl/8 m-1  hyphens-auto text-center">
    The Congolian rainforest is the world's second-largest tropical forest, after the Amazon rainforest. It covers over 500,000,000 acres (2,000,000 km2) across six countries and contains a quarter of the world's remaining tropical forest. The Congolian forests cover southeastern Cameroon, Gabon, Republic of the Congo, the northern and central Democratic Republic of the Congo, and portions of southern and central Africa. The Congolian rainforest is home to a large number of flora and fauna, including more than 10,000 species of plants and over 10,000 species of animals. It is estimated[by whom?] that the region contains more than a quarter of the world’s plant species and is home to one of the world’s most threatened primate species, the western lowland gorilla. There are also a number of other species of primates, including the chimpanzee, black colobus monkey, red colobus monkey, and olive baboon.
<br />
To the north, south, and southwest, the forests transition to drier forest-savanna mosaic, a mosaic of drier forests, savannas, and grasslands. To the west, the Congolian forests transition to the coastal Lower Guinean forests, which extend from southwestern Cameroon into southern Nigeria and Benin; these forest zones share many similarities and are sometimes known as the Lower Guinean-Congolian forests. To the east, the lowland Congolian forests transition to the highland Albertine Rift montane forests, which cover the mountains lining the Albertine Rift, a branch of the East African Rift system.
    </p>
    </div>
  )
};