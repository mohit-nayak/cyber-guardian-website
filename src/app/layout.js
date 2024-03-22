import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Cyber Guardian",
	description: "Cyber Guardian business page",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
