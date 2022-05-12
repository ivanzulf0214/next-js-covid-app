import LatestDataItem from "./LatestDataItem";

export default function LatestData({ country }) {
    if (!country) return <p>No data</p>

    return (
        <div className='mt-10 flex justify-between gap-5'>
            <LatestDataItem label='Active' data={country.latest_data.critical} background='bg-slate-800' />
            <LatestDataItem label='Confirmed' data={country.latest_data.confirmed} background='bg-gray-500' />
            <LatestDataItem label='Recovered' data={country.latest_data.recovered} background='bg-green-500' />
            <LatestDataItem label='Critical' data={country.latest_data.critical} background='bg-orange-500' />
            <LatestDataItem label='Deaths' data={country.latest_data.deaths} background='bg-red-500' />
        </div>
    )
}