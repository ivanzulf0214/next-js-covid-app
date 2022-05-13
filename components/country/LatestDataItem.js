import { BrowserView, MobileView } from 'react-device-detect'
import NumberFormat from 'react-number-format'

export default function LatestDataItem({ label, data, background }) {
    return (
        <div className='w-full'>
            <BrowserView>
                <div className={`text-center p-6 ${background} text-white rounded-lg border border-gray-200 shadow-md`}>
                    <span className="font-normal">{label}</span>
                    <h1 className="mb-2 text-4xl font-bold tracking-tight">
                        <NumberFormat value={data} displayType={'text'}
                            thousandSeparator={true} />
                    </h1>
                </div>
            </BrowserView>
            <MobileView>
                <div className={`text-center p-6 ${background} text-white rounded-lg border border-gray-200 shadow-md`}>
                    <span className="font-normal">{label}</span>
                    <h1 className="mb-2 text-4xl font-bold tracking-tight">
                        <NumberFormat value={data} displayType={'text'}
                            thousandSeparator={true} />
                    </h1>
                </div>
            </MobileView>
        </div>
    )
}