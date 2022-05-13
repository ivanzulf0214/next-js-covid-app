import TimelineItemMobile from './mobile/TimelineItemMobile'

export default function TimelineMobile({ timelines }) {
    return (
        <div>
            {
                timelines && timelines.map((timeline) => (
                    <TimelineItemMobile timeline={timeline} key={timeline.date} />
                ))
            }
        </div>
    )
}