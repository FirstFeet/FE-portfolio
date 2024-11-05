import myData from '../../assets/data/Projects.json'
import { API_URL } from "@/lib/dataConstants"
import ExperienceTile from "@/components/ExperienceTile"

export default async function Page() {

    let data = await fetch(`${API_URL}/project-data`, { next: { revalidate: 0 }   })
    let projects = await data.json()
    return (
        <>
            {projects.map((company: any,index: number) => {
                return (
                    <ExperienceTile key={index} title={company.Company} projects={company.ProjectList}/>
                )
            })}
        </>
        
    )
  }