import NumberFormat from 'react-number-format'
import Link from 'next/link'

export default function CountryItemMobile({ country }) {
    return (
        <Link href={`country/${country.code}`}>
            <div class="block p-4 w-full bg-white rounded-sm border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <table className="w-full border-slate-700 text-lg text-left text-black font-bold dark:text-gray-400">
                    <tr>
                        <td colSpan='2' className="px-6 py-4 text-2xl text-center">
                            <div className="flex items-center justify-center gap-2">
                                {country.name} <span className="text-xl font-normal text-gray-400">({country.code})</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2 px-6 py-4 text-sm text-left">Total Cases</td>
                        <td className="border-2 px-6 py-4 text-base text-left">
                            <NumberFormat value={country.latest_data.confirmed} displayType={'text'} thousandSeparator={true} />
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2 px-6 py-4 text-sm text-left">Total Deaths</td>
                        <td className="border-2 px-6 py-4 text-base text-left">
                            <NumberFormat value={country.latest_data.deaths} displayType={'text'} thousandSeparator={true} />
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2 px-6 py-4 text-sm text-left">Total Recovered</td>
                        <td className="border-2 px-6 py-4 text-base text-left">
                            <NumberFormat value={country.latest_data.recovered} displayType={'text'} thousandSeparator={true} />
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2 px-6 py-4 text-sm text-left">New Cases</td>
                        <td className="border-2 px-6 py-4 text-base text-left">
                            <NumberFormat value={country.today.confirmed} displayType={'text'} thousandSeparator={true} />
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2 px-6 py-4 text-sm text-left">New Deaths</td>
                        <td className="border-2 px-6 py-4 text-base text-left">
                            <NumberFormat value={country.today.deaths} displayType={'text'} thousandSeparator={true} />
                        </td>
                    </tr>
                </table>
            </div>
        </Link>
    )
}