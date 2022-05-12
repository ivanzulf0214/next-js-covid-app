import NumberFormat from 'react-number-format'

export default function LatestDataItem({ label, data, background }) {
    return (
        <div className={`block text-center w-1/5 p-6 ${background} text-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700`}>
            <span className="font-normal dark:text-gray-400">{label}</span>
            <h1 className="mb-2 text-4xl font-bold tracking-tight dark:text-white">
                <NumberFormat value={data} displayType={'text'}
                    thousandSeparator={true} />
            </h1>
        </div>
    )
}