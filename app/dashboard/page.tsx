import myData from '../../assets/data/Projects.json'
import { API_URL } from "@/lib/dataConstants"
import ExperienceTile from "@/components/ExperienceTile"

export default async function Page() {

    let data = await fetch(`${API_URL}/project-data`)
    let projects = await data.json()
    return (
        <>
            {projects?.default?.map((company: any,index: number) => {
                return (
                    <ExperienceTile key={index} title={company.Company} projects={company.ProjectList}/>
                )
            })}
        </>
        
    )
  }