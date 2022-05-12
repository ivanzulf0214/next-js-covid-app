import TimelineItem from './TimelineItem'

export default function Timeline({ timelines }) {
    return (
        <table className="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        New Cases
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        New Recovered
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                        New Deaths
                    </th>
                </tr>
            </thead>
            <tbody className='text-lg'>
                {
                    timelines && timelines.map((timeline) => (
                        <TimelineItem timeline={timeline} />
                    ))
                }
            </tbody>
        </table>
    )
}