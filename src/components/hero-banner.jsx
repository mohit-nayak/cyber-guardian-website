import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/images/banner-bg.jpg";

const HeroBanner = () => {
	return (
		<div className="relative w-full">
			<Image
				src={bannerImg}
				width={500}
				height={500}
				alt="Banner"
				className="absolute inset-0 w-full h-full -z-10"
			/>
			<div className="absolute inset-0 w-full h-full -z-10 bg-gray-900/30" />
			<div className="relative isolate px-6 py-20 lg:py-48 lg:px-8">
				<div className="mx-auto max-w-2xl py-8">
					<div className="hidden sm:mb-8 -top-10 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/50 hover:ring-white/20 transition-all">
							Announcing our next round of funding.{" "}
							<a href="#" className="font-semibold text-primary-light">
								<span className="absolute inset-0" aria-hidden="true" />
								Read more <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Introducing IKHANA
						</h1>
						<p className="mt-6 text-lg leading-8 text-white">
							IKHANA is an answer engine developed by Infused Innovations. See
							for yourself how our answer engine can give you easy insights into
							Microsoft and technology questions. This tool can be catered to
							your needs!
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								className="rounded-md bg-primary px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Get started
							</a>
							<a
								href="#"
								className="font-semibold leading-6 text-white"
							>
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
