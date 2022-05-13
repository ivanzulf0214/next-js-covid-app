import NumberFormat from "react-number-format";

export default function TimelineItemMobile({ timeline }) {
    return (
        <div className="bg-white p-3 rounded-sm border border-gray-100 shadow-md my-3">
            <div className="py-2">
                <h3 className="text-lg font-bold">{timeline.date}</h3>
            </div>
            <div className="flex justify-between gap-1">
                <div className="p-2 flex flex-col w-1/3 items-center gap-2 bg-slate-700 text-white rounded-md border border-slate-400 shadow-sm">
                    <span className="text-center text-sm">Confirmed</span>
                    <NumberFormat value={timeline.confirmed} displayType={'text'} thousandSeparator={true} />
                </div>
                <div className="p-2 flex flex-col w-1/3 items-center gap-2 bg-green-700 text-white rounded-md border border-green-400 shadow-sm">
                    <span className="text-center text-sm">Recovered</span>
                    <NumberFormat value={timeline.recovered} displayType={'text'} thousandSeparator={true} />
                </div>
                <div className="p-2 flex flex-col w-1/3 items-center gap-2 bg-red-700 text-white rounded-md border border-red-400 shadow-sm">
                    <span className="text-center text-sm">Deaths</span>
                    <NumberFormat value={timeline.deaths} displayType={'text'} thousandSeparator={true} />
                </div>
            </div>
        </div>
        // <tr>
        //     <td className='border-2 px-6 py-3 text-center' width='25%'>{timeline.date}</td>
        //     <td className='border-2 px-6 py-3 text-center' width='25%'>
        //         <NumberFormat value={timeline.confirmed} displayType={'text'}
        //             thousandSeparator={true} />
        //         <br/>
        //         (<NumberFormat value={timeline.new_confirmed} displayType={'text'}
        //             thousandSeparator={true} prefix='+' className='text-slate-700' />)
        //     </td>
        //     <td className='border-2 px-6 py-3 text-center' width='25%'>
        //         <NumberFormat value={timeline.recovered} displayType={'text'}
        //             thousandSeparator={true} />
        //         <br/>
        //         (<NumberFormat value={timeline.new_recovered} displayType={'text'}
        //             thousandSeparator={true} prefix='+' className='text-green-500' />)
        //     </td>
        //     <td className='border-2 px-6 py-3 text-center' width='25%'>
        //         <NumberFormat value={timeline.deaths} displayType={'text'}
        //             thousandSeparator={true} />
        //         <br/>
        //         (<NumberFormat value={timeline.new_deaths} displayType={'text'}
        //             thousandSeparator={true} prefix='+' className='text-red-500' />)
        //     </td>
        // </tr>
    )
}