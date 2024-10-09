import Image from "next/image";
import monteverde from "../../img/mal.png"

export default function Monteverde() {
  return (
    <div className="justify-center w-[100%] h-[100%] bg-[#ecf39e] p-9 flex-wrap grid justify-items-center">
    <h1 className="font-bold mt-1 text-[#132a13] text-3xl text-center ">Monteverde Cloud Forest Reserve</h1>
    <Image src={monteverde} alt="" width={500} className="h-64 rounded-xl m-6 "/>
    <h1 className="font-bold m-3 text-[#132a13] text-3xl text-center ">Detail</h1>
    <p className="text-[#132a13] text-xl/8 m-1  hyphens-auto text-center">
    The Monteverde Cloud Forest Reserve (Spanish: Reserva Biológica Bosque Nuboso Monteverde) is a Costa Rican reserve located along the Cordillera de Tilarán within the Puntarenas and Alajuela provinces. Named after the nearby town of Monteverde and founded in 1972, the Reserve consists of over 10,500 hectares (26,000 acres) of cloud forest. It draws roughly 70,000 visitors a year. The reserve consists of 6 ecological zones, 90% of which are virgin forest. A high biodiversity area, consisting of over 2,500 plant species (including the most orchid species in a single place), 100 species of mammals, 400 bird species, 120 reptilian and amphibian species, and thousands of insects, has drawn both scientists and tourists alike.
<br />
History
1950s: Arrival of farmers in the area
In 1951, several dozen Quakers (from 11 families) from Alabama seeking to live as farmers moved to and purchased land in Costa Rica. This was primarily to avoid the Korean War draft, an obligation which contradicted Quaker pacifist ideology. They chose Costa Rica because it had abolished its army just three years earlier. It was the Quakers who named the place Monteverde ("Green Mountain"), for round-the-year green plants.
<br />
1960s: Attention from biologists
Biologists began to take note of Monteverde in the 1960s. Despite the lack of infrastructure and shelter with which to conduct scientific research, these original biologists not only have been continuously documenting, but continue to live in, Monteverde.
<br />
In 1968, Joseph Tosi, who worked for the Tropical Science Center, a foundation for tropical conservation, accompanied Leslie Holdridge on a journey to Monteverde. The visit was part of a study of the northern region of Costa Rica, requested by the government's National Planning Office. There, they met Hubert Mendenhall, leader of the Quaker community at the time, who took them to see the primary forests that surrounded the community.
<br />
At the end of their visit, Holdridge and Tosi recommended to the Quaker community that the native forests be preserved as much as possible in order to protect their water sources and, given the strong winds that swept though the area, to use the forests as windbreakers to protect their fields and homes.</p>
    </div>
  )
};