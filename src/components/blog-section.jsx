import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const BlogSection = () => {
	return (
		<section className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-20 sm:pb-28">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<svg
					className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="e813992c-7d03-4cc4-a2bd-151760b470a0"
							width={200}
							height={200}
							x="50%"
							y={-1}
							patternUnits="userSpaceOnUse"
						>
							<path d="M100 200V.5M.5 .5H200" fill="none" />
						</pattern>
					</defs>
					<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
						<path
							d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
							strokeWidth={0}
						/>
					</svg>
					<rect
						width="100%"
						height="100%"
						strokeWidth={0}
						fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
					/>
				</svg>
			</div>
			<div className="container mx-auto">
				<h2 className="text-center text-3xl lg:text-5xl font-bold mb-10 lg:mb-16">
					Blog
				</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
					<div>
						<Image
							className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
							src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
							width={500}
							height={500}
						/>

						<div className="mt-8">
							<span className="text-primary uppercase">category</span>

							<h1 className="mt-4 text-xl font-semibold text-gray-800">
								What do you want to know about UI
							</h1>

							<p className="mt-2 text-gray-500 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est
								asperiores vel, ab animi recusandae nulla veritatis id tempore
								sapiente
							</p>

							<div className="flex items-center justify-between mt-4">
								<div>
									<a href="#" className="text-lg font-medium text-gray-700">
										John snow
									</a>

									<p className="text-sm text-gray-500 dark:text-gray-400">
										February 1, 2022
									</p>
								</div>

								<a href="#" className="inline-block text-primary underline">
									Read more
								</a>
							</div>
						</div>
					</div>

					<div>
						<Image
							className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
							src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
							width={500}
							height={500}
						/>

						<div className="mt-8">
							<span className="text-primary uppercase">category</span>

							<h1 className="mt-4 text-xl font-semibold text-gray-800">
								All the features you want to know
							</h1>

							<p className="mt-2 text-gray-500 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est
								asperiores vel, ab animi recusandae nulla veritatis id tempore
								sapiente
							</p>

							<div className="flex items-center justify-between mt-4">
								<div>
									<a href="#" className="text-lg font-medium text-gray-700">
										Arthur Melo
									</a>

									<p className="text-sm text-gray-500 dark:text-gray-400">
										February 6, 2022
									</p>
								</div>

								<a href="#" className="inline-block text-primary underline">
									Read more
								</a>
							</div>
						</div>
					</div>

					<div>
						<Image
							className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
							src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
							alt=""
							width={500}
							height={500}
						/>

						<div className="mt-8">
							<span className="text-primary uppercase">category</span>

							<h1 className="mt-4 text-xl font-semibold text-gray-800">
								Which services you get from Meraki UI
							</h1>

							<p className="mt-2 text-gray-500 dark:text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est
								asperiores vel, ab animi recusandae nulla veritatis id tempore
								sapiente
							</p>

							<div className="flex items-center justify-between mt-4">
								<div>
									<a href="#" className="text-lg font-medium text-gray-700">
										Tom Hank
									</a>

									<p className="text-sm text-gray-500 dark:text-gray-400">
										February 19, 2022
									</p>
								</div>

								<a href="#" className="inline-block text-primary underline">
									Read more
								</a>
							</div>
						</div>
					</div>
				</div>
				<Link
					href="#"
					className="flex w-full items-center gap-2 text-center text-gray-800 text-xl lg:text-2xl font-bold mt-8 lg:mt-10"
				>
					View More Posts
					<ArrowRightIcon className="w-6 h-6" />
				</Link>
			</div>
		</section>
	);
};

export default BlogSection;
