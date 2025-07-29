import React from 'react'
import loadingSpinner from '../../images/loading-spinner.gif';
export default function Loading() {
    return <>
        <img src={loadingSpinner} className='w-100 position-relative top-0 bottom-0 start-0 end-0' alt="loadinglogo" />
    </>
}
