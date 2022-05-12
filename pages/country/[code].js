import { React, useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import Loading from '../../components/Loading'
import LatestData from '../../components/country/LatestData'
import Timeline from '../../components/country/Timeline'

export default function Country() {
    const [country, setCountry] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()
    const { code } = router.query

    useEffect(() => {
        if (!router.isReady) return
        fetch(`https://corona-api.com/countries/${code}`)
            .then((res) => res.json())
            .then((data) => {
                setCountry(data.data)
                setIsLoading(false)
            })
    }, [router.isReady])

    if (isLoading) return <Loading />

    return (
        <div className="container mx-auto mt-10">
            <Link href={`/`}>
                <a className='text-xl'>&larr; Back</a>
            </Link>

            <h1 className='text-5xl mt-5'>Detail for {country.name}</h1>
            <LatestData country={country} />

            <div className='mt-10'>
                <h3 className='text-3xl'>Timeline</h3>
                <Timeline timelines={country.timeline} />
            </div>
        </div>
    )
}