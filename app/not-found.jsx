import React from 'react'

const NotFound = () => {
    return (
        <section className="w-full h-full flex flex-col gap-2 items-center justify-center bg-muted">
            <div className='flex text-center gap-x-6'>
                <p>404</p>
                <p>|</p>
                <p>Page Not Found</p>
            </div>
        </section>
    )
}

export default NotFound