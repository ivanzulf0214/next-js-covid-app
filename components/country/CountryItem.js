import Link from 'next/link'
import NumberFormat from 'react-number-format'

export default function CountryItem({ country }) {
    const newCaseRatio = (country.today.confirmed / country.latest_data.confirmed) * 100
    const newDeathRatio = (country.today.deaths / country.latest_data.deaths) * 100
    const totalDeathRatio = country.latest_data.calculated.death_rate
    const totalRecoveryRate = country.latest_data.calculated.recovery_rate

    return (
        <Link href={`country/${country.code}`}>
            <tr className='bg-white cursor-pointer'>
                <td className='border-2 px-6 py-4 w-1/6 font-medium text-gray-900 whitespace-nowrap'>
                    <a>{country.name}</a>
                </td>
                <td className='border-2 px-6 py-4 text-gray-600 text-center'>
                    <NumberFormat value={country.latest_data.confirmed} displayType={'text'}
                        thousandSeparator={true} />
                </td>
                <td className='border-2 px-6 py-4 text-gray-600 font-bold text-center'>
                    {country.today.confirmed > 0 ? '+ ' : ''} <NumberFormat value={country.today.confirmed} displayType={'text'}
                        thousandSeparator={true} />

                    {
                        country.today.confirmed > 0 && <span className='font-normal text-sm'> ({`${newCaseRatio.toFixed(2)}%`})</span>
                    }
                </td>
                <td className='border-2 px-6 py-4 text-gray-600 font-bold text-center'>
                    <NumberFormat value={country.latest_data.deaths} displayType={'text'}
                        thousandSeparator={true} />

                    {
                        totalDeathRatio != null && <span className='font-normal text-sm'> ({`${totalDeathRatio.toFixed(2)}%`})</span>
                    }
                </td>
                <td className='border-2 px-6 py-4 text-gray-600 font-bold text-center'>
                    {country.today.deaths > 0 ? '+ ' : ''} <NumberFormat value={country.today.deaths} displayType={'text'}
                        thousandSeparator={true} />
                </td>
                <td className='border-2 px-6 py-4 text-gray-600 font-bold text-center'>
                    <NumberFormat value={country.latest_data.recovered} displayType={'text'}
                        thousandSeparator={true} />

                    {
                        totalRecoveryRate != null && <span className='font-normal text-sm'> ({`${totalRecoveryRate.toFixed(2)}%`})</span>
                    }
                </td>
            </tr>
        </Link>
    )
}