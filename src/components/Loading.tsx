import { CircleNotch } from "phosphor-react";
import React from "react";

export default function Loading() {
	return (
		<div className="flex items-center justify-center w-6 h-6 overflow-hidden">
			<CircleNotch weight="bold" className="h-4 2-4 animate-spin" />
		</div>
	);
}
