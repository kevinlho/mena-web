import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import Footer from "./footer/footer";

export default function DefaultLayout({
	currentPage,
	children,
}: {
	currentPage: String;
	children: React.ReactNode;
}) {

	function RenderNavbar(){
		switch(currentPage){
			case "LandingPage":
				return false
			default:
				return true
		}
	}

	function RenderFooter(){
		switch(currentPage){
			case "LandingPage":
				return false
			default:
				return true
		}
	}
	
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			{RenderNavbar() && <Navbar/>}
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			{RenderFooter() && <Footer/>}
			{/* <footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
					title="nextui.org homepage"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">NextUI</p>
				</Link>
			</footer> */}
		</div>
	);
}
