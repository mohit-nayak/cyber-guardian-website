import Image from "next/image";
import dashboardImg from "@/assets/images/dashboard-1.jpg";

const ContentSectionWithImage = () => {
	return (
		<>
			<div className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-20 lg:overflow-visible lg:px-0">
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
				<div className="space-y-8 lg:space-y-16">
					<h2 className="text-center text-3xl lg:text-5xl font-bold">
						We Unlock Strategic Brilliance
					</h2>
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
						<div className="w-full lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-1 lg:row-start-2 lg:overflow-hidden">
							<Image
								className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
								src={dashboardImg}
								alt="Dashboard"
								width={500}
								height={500}
							/>
						</div>
						<div className="lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:pl-24 lg:px-8">
							<div className="lg:pr-4">
								<div className="lg:max-w-lg">
									<p className="text-base font-semibold leading-7 text-primary">
										Deploy faster
									</p>
									<h1 className="mt-2 mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
										About Infused Innovations
									</h1>
									<p className="my-4 text-gray-700">
										At Infused Innovations, we&apos;re your Strategic Services
										Provider (SSP), specializing in modernization, innovation,
										and cybersecurity. As your dedicated partner, we offer
										end-to-end capabilities, from ideation to engineering
										services in cloud, data, AI, and cybersecurity.
									</p>
									<p className="my-4 text-gray-700">
										Our commitment is to empower your team, accelerate digital
										transformation, and drive sustainable growth. Choose us as
										your trusted SSP, and let&apos;s embark on a journey of
										transformative
									</p>
									<p className="my-4 text-gray-700">
										Our commitment is to empower your team, accelerate digital
										transformation, and drive sustainable growth. Choose us as
										your trusted SSP, and let&apos;s embark on a journey of
										transformative
									</p>
									<p className="my-4 text-gray-700">
										At Infused Innovations, we&apos;re your Strategic Services
										Provider (SSP), specializing in modernization, innovation,
										and cybersecurity. As your dedicated partner, we offer
										end-to-end capabilities, from ideation to engineering
										services in cloud, data, AI, and cybersecurity.
									</p>
									<p className="my-4 text-gray-700">
										Our commitment is to empower your team, accelerate digital
										transformation, and drive sustainable growth. Choose us as
										your trusted SSP, and let&apos;s embark on a journey of
										transformative
									</p>
									<p className="my-4 text-gray-700">
										Our commitment is to empower your team, accelerate digital
										transformation, and drive sustainable growth. Choose us as
										your trusted SSP, and let&apos;s embark on a journey of
										transformative
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-20 lg:overflow-visible lg:px-0">
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<svg
						className="absolute right-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
				<div className="space-y-10 lg:space-y-16">
					<h2 className="text-center text-3xl lg:text-5xl font-bold">
						We Unlock Strategic Brilliance
					</h2>
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
						<div className="w-full lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-1 lg:row-start-2 lg:overflow-hidden">
							<Image
								className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
								src={dashboardImg}
								alt="Dashboard"
								width={500}
								height={500}
							/>
						</div>
						<div className="lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
							<div className="lg:pr-4">
								<div className="lg:max-w-lg">
									<p className="text-base font-semibold leading-7 text-primary">
										Deploy faster
									</p>
									<h1 className="mt-2 mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
										About Infused Innovations
									</h1>
									<p className="my-4 text-gray-700">
										At Infused Innovations, we&apos;re your Strategic Services
										Provider (SSP), specializing in modernization, innovation,
										and cybersecurity. As your dedicated partner, we offer
										end-to-end capabilities, from ideation to engineering
										services in cloud, data, AI, and cybersecurity.
									</p>
									<p className="my-4 text-gray-700">
										Our commitment is to empower your team, accelerate digital
										transformation, and drive sustainable growth. Choose us as
										your trusted SSP, and let&apos;s embark on a journey of
										transformative
									</p>
									<p className="my-4 text-gray-700">
										Our commitment is to empower your team, accelerate digital
										transformation, and drive sustainable growth. Choose us as
										your trusted SSP, and let&apos;s embark on a journey of
										transformative
									</p>
									<p className="my-4 text-gray-700">
										At Infused Innovations, we&apos;re your Strategic Services
										Provider (SSP), specializing in modernization, innovation,
										and cybersecurity. As your dedicated partner, we offer
										end-to-end capabilities, from ideation to engineering
										services in cloud, data, AI, and cybersecurity.
									</p>
									<p className="my-4 text-gray-700">
										Our commitment is to empower your team, accelerate digital
										transformation, and drive sustainable growth. Choose us as
										your trusted SSP, and let&apos;s embark on a journey of
										transformative
									</p>
									<p className="my-4 text-gray-700">
										Our commitment is to empower your team, accelerate digital
										transformation, and drive sustainable growth. Choose us as
										your trusted SSP, and let&apos;s embark on a journey of
										transformative
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContentSectionWithImage;
