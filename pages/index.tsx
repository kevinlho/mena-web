import {Image} from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

import { Card, Skeleton } from "@nextui-org/react";

export default function IndexPage() {
	return (
		<DefaultLayout currentPage={"LandingPage"}>
			<section className="flex flex-col items-center justify-center h-screen">
			<Image
				width={300}
				height={300}
				alt="NextUI hero Image with delay"
				src="./mena-logo.png"
				/>
			<h1>COMING SOON!</h1>
			</section>
		</DefaultLayout>
	);
}
