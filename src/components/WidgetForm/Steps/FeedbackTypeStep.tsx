import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

interface FeedbackTypeStepProps {
	onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export default function FeedbackTypeStep({
	onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
	return (
		<>
			<header>
				<span className="text-xl leading-6">Deixe seu feedback</span>
				<CloseButton />
			</header>
			<div className="flex w-full gap-2 py-y">
				{Object.entries(feedbackTypes).map(([key, value]) => {
					return (
						<button
							className="flex flex-col items-center flex-1 w-24 gap-2 py-5 border-2 border-transparent rounded-lg bg-zinc-800 hover:border-brand-500 focus:border-brand-500 focus:outline-none"
							onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
							key={key}
						>
							<img src={value.image.source} />
							<span>{value.title}</span>
						</button>
					);
				})}
			</div>
		</>
	);
}
