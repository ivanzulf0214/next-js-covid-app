export default function Loading() {
    return (
        <div className='container mx-auto w-full h-screen flex flex-col justify-center text-center'>
            <div className="flex justify-center items-center gap-1">
                <div className="w-4 h-4 bg-slate-700 rounded-full ball ball-one"></div>
                <div className="w-4 h-4 bg-slate-700 rounded-full ball ball-two"></div>
                <div className="w-4 h-4 bg-slate-700 rounded-full ball ball-three"></div>
            </div>
        </div>
    )
}