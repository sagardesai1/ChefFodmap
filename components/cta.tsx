import Link from 'next/link'

export default function Cta() {
    return (
        <section className="relative bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:pb-60 sm:pt-40 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Start your free trial today</h2>
                    <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Flowbite Platform for 30 days. No credit card required.</p>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                        <ul>
                            <li>
                                <Link href="/signup" className="btn text-white bg-green-500 hover:bg-green-600 w-full mb-4 sm:w-auto sm:mb-0">Start free trial</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}