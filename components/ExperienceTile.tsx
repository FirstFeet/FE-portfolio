import React from "react";
import CardData from "./CardData";
const ExperienceTile = ({title, projects}: {String, any}) => {

return (
    <section className="py-20 bg-[#fcfcfc] px-2">
        <div className="container">
            <h5 className="bg-[rgb(191,200,203)] inline-block rounded-full  px-5 py-3 border-2 border-black font-bold text-2xl ">
                {title}
            </h5>
        </div>
        <div className="grid gap-3 px-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-14">
            {projects.map(project => {
                return (
                    <CardData 
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        role={project.role}
                    />
                )
            })}
        </div>
    </section>
)

//     <section className="py-20 bg-[#000] px-2">
//         <div className="container">
//             <div className="min-w-max m-20">
//                 <p className="text-3xl md:text-5xl lg:text-7xl">{title}</p>
//             </div>
//             <div className="min-w-max m-20">
//                 <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-1 lg:grid-cols-3 lg:gap-2">
                    
//                     {projects.map(project => {
//                         return (
//                             <CardData 
//                                 title={project.title}
//                                 description={project.description}
//                                 link={project.link}
//                                 role={project.role}
//                         />
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     </section>
//   );
}

export default ExperienceTile;
