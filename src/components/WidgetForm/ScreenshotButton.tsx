import { Camera } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import Loading from "../Loading";

export default function ScreenshotButton() {
	const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false);

	async function handleTakeScreenshot() {
		setIsTakingScreenshot(true);

		const canvas = await html2canvas(document.querySelector("html")!);
		const base64image = canvas.toDataURL("image/png");
    
		setIsTakingScreenshot(false);
	}

	return (
		<button
			className="p-2 transition-colors border-transparent rounded-md bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-300"
			type="button"
			onClick={handleTakeScreenshot}
		>
			{isTakingScreenshot ? (
				<Loading />
			) : (
				<Camera className="w-6 h-6 text-zinc-100" />
			)}
		</button>
	);
}
