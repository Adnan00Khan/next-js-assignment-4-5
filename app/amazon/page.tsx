import Image from "next/image";
import amazon from "../../img/amazon.png"

export default function Amazon() {
  return (
    <div className="justify-center w-[100%] h-[100%] bg-[#ecf39e] p-9 flex-wrap grid justify-items-center">
    <h1 className="font-bold mt-1 text-[#132a13] text-3xl text-center ">Amazon Rainforest</h1>
    <Image src={amazon} alt="" width={500} className="h-64 rounded-xl m-6 "/>
    <h1 className="font-bold m-3 text-[#132a13] text-3xl text-center ">Detail</h1>
    <p className="text-[#132a13] text-xl/8 m-1  hyphens-auto text-center">
    The Amazon rainforest, also called Amazon jungle or Amazonia, is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 km2 (2,700,000 sq mi), of which 6,000,000 km2 (2,300,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations and 3,344 indigenous territories.
    <br />
The majority of the forest, 60%, is in Brazil, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Bolivia, Ecuador, French Guiana, Guyana, Suriname, and Venezuela. Four nations have "Amazonas" as the name of one of their first-level administrative regions, and France uses the name "Guiana Amazonian Park" for French Guiana's protected rainforest area. The Amazon represents over half of the total area of remaining rainforests on Earth, and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees in about 16,000 species.
<br />
More than 30 million people of 350 different ethnic groups live in the Amazon, which are subdivided into 9 different national political systems and 3,344 formally acknowledged indigenous territories. Indigenous peoples make up 9% of the total population, and 60 of the groups remain largely isolated.
<br />
Large scale deforestation is occurring in the forest, creating different harmful effects. Economic losses due to deforestation in Brazil could be approximately 7 times higher in comparison to the cost of all commodities produced through deforestation. In 2023, the World Bank published a report proposing a non-deforestation based economic program in the region.</p>
    </div>
  )
};