import React from 'react'
import Image from './Image'
import ErrorBoundary from '../ErrorBoundary'

export default function Error() {
  return (
    <div className="container">
        <h1>
            Error 404:Page Not found
        </h1>
        <div className='row'>
            <div className='col-4'>
                <Image p1="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3e10e985/images/Titan/Catalog/1713BM02_1.jpg?sw=800&sh=800"></Image>
            </div>
            <div className='col-4'>
                <Image p1="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw99629694/images/Fastrack/Catalog/38111PP01_1.jpg?sw=800&sh=800"></Image>
            </div>
            <div className='col-4'>
                <ErrorBoundary>
                    <Image p1=""></Image>
                </ErrorBoundary>
            </div>
        </div>
    </div>
  )
}


