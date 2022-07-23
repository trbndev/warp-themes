import { useAppContext } from '@lib/AppContext';

function WarpAppPrompt() {
	const [context, _] = useAppContext();

	return (
		<div className=' pl-4 pt-3 pb-4 font-mono'>
			<p className='text-sm font-semibold' style={{ color: context.terminal_colors.normal.magenta }}>
				~/warp-theme.vercel.app
			</p>
			<p className='pt-2 pb-2 text-sm'>
				echo &quot;Welcome to Warp Theme!&quot;
				<span
					className='animate animate-[cursor-blink_1s_steps(2)_infinite] rounded-sm px-0.5'
					style={{ backgroundColor: context.accent.color }}
				></span>
			</p>
		</div>
	);
}

export default WarpAppPrompt;
