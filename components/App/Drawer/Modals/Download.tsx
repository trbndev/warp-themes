import { useAppContext } from '@lib/AppContext';
import YAML from 'json-to-pretty-yaml';

function AppDrawerModalsDownload() {
	const [context, _] = useAppContext();

	function downloadTheme() {
		const theme = YAML.stringify({
			accent: context.accent.color,
			background: context.background.color,
			foreground: context.foreground,
			details: context.details,
			terminal_colors: {
				normal: {
					black: context.terminal_colors.normal.black,
					red: context.terminal_colors.normal.red,
					green: context.terminal_colors.normal.green,
					yellow: context.terminal_colors.normal.yellow,
					blue: context.terminal_colors.normal.blue,
					magenta: context.terminal_colors.normal.magenta,
					cyan: context.terminal_colors.normal.cyan,
					white: context.terminal_colors.normal.white,
				},
				bright: {
					black: context.terminal_colors.bright.black,
					red: context.terminal_colors.bright.red,
					green: context.terminal_colors.bright.green,
					yellow: context.terminal_colors.bright.yellow,
					blue: context.terminal_colors.bright.blue,
					magenta: context.terminal_colors.bright.magenta,
					cyan: context.terminal_colors.bright.cyan,
					white: context.terminal_colors.bright.white,
				},
			},
		});
		const objectURL = window.URL.createObjectURL(new Blob([theme], { type: 'application/yaml' }));
		const downloadLink = document.createElement('a');
		downloadLink.href = objectURL;
		downloadLink.download = `${context.name}.yaml`;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		downloadLink.remove();
		window.URL.revokeObjectURL(objectURL);
	}
	function hashTheme() {
		const name = context.name;
		const theme = YAML.stringify({
			accent: context.accent.color,
			background: context.background.color,
			foreground: context.foreground,
			details: context.details,
			terminal_colors: {
				normal: {
					black: context.terminal_colors.normal.black,
					red: context.terminal_colors.normal.red,
					green: context.terminal_colors.normal.green,
					yellow: context.terminal_colors.normal.yellow,
					blue: context.terminal_colors.normal.blue,
					magenta: context.terminal_colors.normal.magenta,
					cyan: context.terminal_colors.normal.cyan,
					white: context.terminal_colors.normal.white,
				},
				bright: {
					black: context.terminal_colors.bright.black,
					red: context.terminal_colors.bright.red,
					green: context.terminal_colors.bright.green,
					yellow: context.terminal_colors.bright.yellow,
					blue: context.terminal_colors.bright.blue,
					magenta: context.terminal_colors.bright.magenta,
					cyan: context.terminal_colors.bright.cyan,
					white: context.terminal_colors.bright.white,
				},
			},
		});
		return Buffer.from(`${name};${theme}`).toString('base64');
	}

	return (
		<>
			<input type='checkbox' id='download-modal' className='modal-toggle' aria-label='Toggle Download Modal' />
			<label htmlFor='download-modal' className='modal cursor-pointer modal-bottom sm:modal-middle'>
				<label className='modal-box flex flex-col justify-center overflow-x-hidden' htmlFor=''>
					<div className='flex justify-center flex-col text-center'>
						<h1 className='text-2xl font-semibold flex flex-col mb-4 items-center justify-center text-center'>
							<div className='badge mb-1'>Recommended</div>
							<span>Automatic Installation</span>
						</h1>
						<div className='mockup-code text-sm'>
							<pre data-prefix='$'>
								<code className='-ml-1 text-xs' id='install-theme-command'>
									curl {`https://war.vercel.app/d/${hashTheme()}`} | bash
								</code>
							</pre>
						</div>
						<div className='space-x-2 mt-2 flex justify-evenly'>
							<label
								className='btn btn-ghost swap'
								role='button'
								onClick={() => {
									navigator.clipboard.writeText(
										`curl https://war.vercel.app/d/${hashTheme()} | bash`
									);
									setTimeout(() => {
										//@ts-ignore
										document.getElementById('copied-curl-code').checked = false;
									}, 1500);
								}}
							>
								<input type='checkbox' id='copied-curl-code' />
								<div className='swap-on'>✅ Copied</div>
								<div className='swap-off'>📋 Copy</div>
							</label>

							<a
								target='_blank'
								className='btn btn-ghost'
								href={`https://war.vercel.app/d/${hashTheme()}`}
							>
								🔍 Inspect source
							</a>
						</div>
					</div>
					<div className='divider'>OR</div>
					<div className='text-center'>
						<h1 className='text-xl font-medium mb-3 text-slate-900'>Manual Installation</h1>
						<button onClick={downloadTheme} className='btn btn-wide btn-outline'>
							Download file
						</button>
						<p className='mt-2'>
							Instructions:&nbsp;
							<a
								className='text-blue-500 hover:text-blue-700 mt-3'
								href='https://docs.warp.dev/features/themes/custom-themes#how-do-i-use-a-custom-theme-in-warp'
								target='_blank'
							>
								How to install your theme
							</a>
						</p>
					</div>
				</label>
			</label>
		</>
	);
}

export default AppDrawerModalsDownload;
