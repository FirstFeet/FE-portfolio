'use client'
import React from 'react'
import { useParams } from 'next/navigation'

import DomainKnowledge from "@/components/DomainKnowledge"
import myData from '../../../assets/data/Projects.json'

export default async function Page() {
    const params = useParams<{ id: string; item: string }>()
    return (
        <div>
            param - {params.id}
            <DomainKnowledge selectedDomain={params.id} itemRemoved={()=>{}} />
        </div>
    )
  }