import Dashboard from "@/components/Dashboard"
import myData from '../../assets/data/workHistory.json'

export default async function Page() {

    return (
        <div className="relative overflow-x-auto md:px-2">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-black">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3 sm:w-50 w-100">
                            Organization
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Designation
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date of Joining
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Data of Releving
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {myData.map(company => {
                        return (
                            <tr className="bg-white border-1">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 bg-gray-200 sm:w-50 w-100">
                                    {company.Organization}
                                </th>
                                <td className="px-6 py-4 font-semibold">
                                    {company.Designation}
                                </td>
                                <td className="px-6 py-4">
                                    {company.DOJ}
                                </td>
                                <td className="px-6 py-4">
                                    {company.DOR}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

        
    )
  }