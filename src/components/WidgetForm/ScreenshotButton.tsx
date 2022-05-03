import { Camera } from "phosphor-react";

export default function ScreenshotButton() {
	return (
		<button
			className="p-2 transition-colors border-transparent rounded-md bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-300"
			type="button"
		>
			<Camera className="w-6 h-6 text-zinc-100" />
		</button>
	);
}
