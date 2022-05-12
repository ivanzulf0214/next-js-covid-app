import CountryItem from "./CountryItem"

export default function CountryTabel({ countries }) {
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Territory
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Total Cases
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        New Cases
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Total Deaths
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        New Deaths
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        Total Recovered
                    </th>
                </tr>
            </thead>
            <tbody className="text-lg">
                {
                    countries && countries.map((country) => (
                        <CountryItem country={country} key={country.code} />
                    ))
                }
            </tbody>
        </table>
    )
}