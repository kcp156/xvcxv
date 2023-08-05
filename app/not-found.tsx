import React from 'react'

export default function NotFoundPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

    <div className="text-center">
          <p className=" font-semibold text-red-600 text-4xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-400">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-50">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          </div>
        </div>

  </section>
  )
}
