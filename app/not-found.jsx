import React from 'react'

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

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