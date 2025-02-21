import { arrayAdmin } from "@/components/data/admin"
import { BASE_API_URL } from "@/global"
import { get } from "@/lib/api-bridge"
import { getCookies } from "@/lib/server-cookies"
import { UserCircleIcon, UserIcon, UsersIcon } from "lucide-react"


const getMenuCount = async (): Promise<number> => {
  try {
    const TOKEN = getCookies("token")
    if (!TOKEN) {
      console.log("Token not found")
      return 0
    }

    const url = `${BASE_API_URL}/menu`
    const { data } = await get(url, await TOKEN)
    return data?.status ? data.data.length : 0
  } catch (error) {
    console.log(error)
    return 0
  }
}


const DashboardPage = async () => {
  const menuCount = await getMenuCount()


  const statisticItems = [
    {
      title: "Number of cashier",
      count: 4,
      description: "Total cashier this year",
      icon: UsersIcon,
    },
    { title: "Number of transaction", count: "Rp. 50jt", description: "Total transaction this year", icon: UserIcon},
    { title: "Number of customer", count: 3.696, description: "Total Customer this year", icon: UserIcon },
    {
      title: "Number of menu",
      count: menuCount,
      description: "Menus have been added",
      icon: UserCircleIcon,
    },
  ]

  return (
    
      <div className="w-full">
        <div className="bg-white overflow-hidden rounded-lg mb-8">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Statistics</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {statisticItems.map((item, index) => (
                <div key={index} className="bg-gray-50 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{item.title}</dt>
                          <dd className="text-3xl font-semibold text-gray-900">{item.count}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-xl rounded-lg">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Admin Data</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cashier ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total Customer
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total Transaction
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {arrayAdmin.map((admin, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://ui-avatars.com/api/?name=${admin.name}`}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{admin.teamName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{admin.school}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DashboardPage
