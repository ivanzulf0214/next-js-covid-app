import NumberFormat from "react-number-format";

export default function TimelineItem({ timeline }) {
    return (
        <tr>
            <td className='border-2 px-6 py-3 text-center' width='25%'>{timeline.date}</td>
            <td className='border-2 px-6 py-3 text-center' width='25%'>
                <NumberFormat value={timeline.confirmed} displayType={'text'}
                    thousandSeparator={true} className='text-slate-900' />
                <br/>
                (<NumberFormat value={timeline.new_confirmed} displayType={'text'}
                    thousandSeparator={true} prefix='+' className='text-gray-500' />)
            </td>
            <td className='border-2 px-6 py-3 text-center' width='25%'>
                <NumberFormat value={timeline.recovered} displayType={'text'}
                    thousandSeparator={true} className='text-slate-900' />
                <br/>
                (<NumberFormat value={timeline.new_recovered} displayType={'text'}
                    thousandSeparator={true} prefix='+' className='text-gray-500' />)
            </td>
            <td className='border-2 px-6 py-3 text-center' width='25%'>
                <NumberFormat value={timeline.deaths} displayType={'text'}
                    thousandSeparator={true} className='text-slate-900' />
                <br/>
                (<NumberFormat value={timeline.new_deaths} displayType={'text'}
                    thousandSeparator={true} prefix='+' className='text-gray-500' />)
            </td>
        </tr>
    )
}