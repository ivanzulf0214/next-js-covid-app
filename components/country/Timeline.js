import { BrowserView, MobileView } from 'react-device-detect'
import TimelineItem from './TimelineItem'
import TimelineItemMobile from './mobile/TimelineItemMobile'

export default function Timeline({ timelines }) {
    return (
        <div>
            <BrowserView>
                <table className="mt-5 w-full text-sm text-left text-gray-500">
                    <thead className="text-base text-gray-700 uppercase bg-gray-50">
                        <tr className='border-2'>
                            <th scope="col" className="border-2 px-6 py-3 text-center">
                                Date
                            </th>
                            <th scope="col" className="border-2 px-6 py-3 text-center">
                                New Cases
                            </th>
                            <th scope="col" className="border-2 px-6 py-3 text-center">
                                New Recovered
                            </th>
                            <th scope="col" className="border-2 px-6 py-3 text-center">
                                New Deaths
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-lg'>
                        {
                            timelines && timelines.map((timeline, index) => (
                                <TimelineItem timeline={timeline} key={index} />
                            ))
                        }
                    </tbody>
                </table>
            </BrowserView>
            <MobileView>
                {
                    timelines && timelines.map((timeline, index) => (
                        <TimelineItemMobile timeline={timeline} key={index} />
                    ))
                }
            </MobileView>
        </div>
    )
}