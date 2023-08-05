import React from 'react'
import Image from 'next/image';
const cloudinary = require('cloudinary');

export default function DashboardPage() {

  cloudinary.v2.config({
    cloud_name: 'ddqg1mfyq',
    api_key: '461976187272674',
    api_secret: 'P5x34O1_AICpgCc_T1-DkIt3k_M',
    secure: true,
  });

  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "https://res.cloudinary.com/ddqg1mfyq/image/upload/v1690599172/ffkfki49drr15iks5qby.jpg",
      imageSrc:"https://res.cloudinary.com/ddqg1mfyq/image/upload/v1690599172/ffkfki49drr15iks5qby.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "https://res.cloudinary.com/ddqg1mfyq/image/upload/mitm4wflqlin3nyttoyx.jpg",
      imageSrc:"https://res.cloudinary.com/ddqg1mfyq/image/upload/mitm4wflqlin3nyttoyx.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "https://res.cloudinary.com/ddqg1mfyq/image/upload/v1691008649/ewoukyuinyvnuvouzldz.jpg",
      imageSrc:"https://res.cloudinary.com/ddqg1mfyq/image/upload/v1691008649/ewoukyuinyvnuvouzldz.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  ]


  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-auto flex-col items-start gap-2">

        <p className="max-w text-lg text-muted-foreground">
        Images Page
        </p>
      </div>
      <div className=" ">
      <div className="relative overflow-x-auto rounded-md  sm:rounded-md ">
        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}

                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
    </section>
  )
}
