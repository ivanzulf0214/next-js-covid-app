import CountryItem from "./CountryItem"
import { BrowserView, MobileView } from 'react-device-detect'
import CountryItemMobile from "./mobile/CountryItemMobile"

export default function CountryTable({ countries }) {
    return (
        <div>
            <BrowserView>
                <table className="w-full border-2 text-sm text-left text-gray-500">
                    <thead className="text-xl text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 border-2">
                                Territory
                            </th>
                            <th scope="col" className="px-6 py-3 border-2 text-center">
                                Total Cases
                            </th>
                            <th scope="col" className="px-6 py-3 border-2 text-center">
                                New Cases
                            </th>
                            <th scope="col" className="px-6 py-3 border-2 text-center">
                                Total Deaths
                            </th>
                            <th scope="col" className="px-6 py-3 border-2 text-center">
                                New Deaths
                            </th>
                            <th scope="col" className="px-6 py-3 border-2 text-center">
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
            </BrowserView>
            <MobileView>
                <div className="flex flex-col items-center gap-y-10 pr-4">
                    {
                        countries && countries.map((country) => (
                            <CountryItemMobile country={country} key={country.code} />
                        ))
                    }
                </div>
            </MobileView>
        </div>
    )
}