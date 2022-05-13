import Link from 'next/link'
import NumberFormat from 'react-number-format'

export default function CountryItem({ country }) {
    return (
        <Link href={`country/${country.code}`}>
            <tr className='bg-white cursor-pointer'>
                <td className='border-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    <a>{country.name}</a>
                </td>
                <td className='border-2 px-6 py-4 text-gray-600 text-center'><NumberFormat value={country.latest_data.confirmed} displayType={'text'}
                    thousandSeparator={true} /></td>
                <td className='border-2 px-6 py-4 text-gray-600 font-bold text-center'><NumberFormat value={country.today.confirmed} displayType={'text'}
                    thousandSeparator={true} prefix='+ ' /></td>
                <td className='border-2 px-6 py-4 text-red-500 font-bold text-center'><NumberFormat value={country.latest_data.deaths} displayType={'text'}
                    thousandSeparator={true} /></td>
                <td className='border-2 px-6 py-4 text-red-500 font-bold text-center'><NumberFormat value={country.today.deaths} displayType={'text'}
                    thousandSeparator={true} prefix='+ ' /></td>
                <td className='border-2 px-6 py-4 text-green-500 font-bold text-center'><NumberFormat value={country.latest_data.recovered} displayType={'text'}
                    thousandSeparator={true} /></td>
            </tr>
        </Link>
    )
}