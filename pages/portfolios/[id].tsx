import React from 'react'
import { useRouter } from 'next/router'

const PortfolioDetail: React.FC = () => {

    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {id}
        </div>
    )
}

export default PortfolioDetail;
