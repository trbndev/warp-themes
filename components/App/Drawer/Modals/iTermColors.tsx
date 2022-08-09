import { InboxInIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useAppContext } from '@lib/AppContext';
import plist from 'plist';
import rgbHex from 'rgb-hex';

function AppDrawerModalsiTermColors() {
	const [fileURL, setFileURL] = useState('');
	const [context, setContext] = useAppContext();

	function rgbToHex(r, g, b) {
		r = r * 255;
		g = g * 255;
		b = b * 255;
		return '#' + rgbHex(r, g, b);
	}

	async function loadTheme() {
		if (fileURL.startsWith('https://github.com/')) {
			setFileURL(fileURL.replace('https://github.com/', 'https://raw.githubusercontent.com/'));
		}
		try {
			const response = await fetch(fileURL);
			if (response.status != 200) throw new Error();
			const colorScheme = plist.parse(await response.text());
			setContext({
				name: fileURL.split('/').pop().replace('.itermcolors', ''),
				accent: {
					useGradient: false,
					gradient: {
						from: '',
						to: '',
					},
					color: rgbToHex(
						colorScheme['Cursor Color']['Red Component'],
						colorScheme['Cursor Color']['Green Component'],
						colorScheme['Cursor Color']['Blue Component']
					),
				},
				background: {
					useGradient: false,
					gradient: {
						from: '',
						to: '',
					},
					color: rgbToHex(
						colorScheme['Background Color']['Red Component'],
						colorScheme['Background Color']['Green Component'],
						colorScheme['Background Color']['Blue Component']
					),
				},
				foreground: rgbToHex(
					colorScheme['Foreground Color']['Red Component'],
					colorScheme['Foreground Color']['Green Component'],
					colorScheme['Foreground Color']['Blue Component']
				),
				details: 'darker',
				terminal_colors: {
					normal: {
						black: rgbToHex(
							colorScheme['Ansi 0 Color']['Red Component'],
							colorScheme['Ansi 0 Color']['Green Component'],
							colorScheme['Ansi 0 Color']['Blue Component']
						),
						red: rgbToHex(
							colorScheme['Ansi 1 Color']['Red Component'],
							colorScheme['Ansi 1 Color']['Green Component'],
							colorScheme['Ansi 1 Color']['Blue Component']
						),
						green: rgbToHex(
							colorScheme['Ansi 2 Color']['Red Component'],
							colorScheme['Ansi 2 Color']['Green Component'],
							colorScheme['Ansi 2 Color']['Blue Component']
						),
						yellow: rgbToHex(
							colorScheme['Ansi 3 Color']['Red Component'],
							colorScheme['Ansi 3 Color']['Green Component'],
							colorScheme['Ansi 3 Color']['Blue Component']
						),
						blue: rgbToHex(
							colorScheme['Ansi 4 Color']['Red Component'],
							colorScheme['Ansi 4 Color']['Green Component'],
							colorScheme['Ansi 4 Color']['Blue Component']
						),
						magenta: rgbToHex(
							colorScheme['Ansi 5 Color']['Red Component'],
							colorScheme['Ansi 5 Color']['Green Component'],
							colorScheme['Ansi 5 Color']['Blue Component']
						),
						cyan: rgbToHex(
							colorScheme['Ansi 6 Color']['Red Component'],
							colorScheme['Ansi 6 Color']['Green Component'],
							colorScheme['Ansi 6 Color']['Blue Component']
						),
						white: rgbToHex(
							colorScheme['Ansi 7 Color']['Red Component'],
							colorScheme['Ansi 7 Color']['Green Component'],
							colorScheme['Ansi 7 Color']['Blue Component']
						),
					},
					bright: {
						black: rgbToHex(
							colorScheme['Ansi 8 Color']['Red Component'],
							colorScheme['Ansi 8 Color']['Green Component'],
							colorScheme['Ansi 8 Color']['Blue Component']
						),
						red: rgbToHex(
							colorScheme['Ansi 9 Color']['Red Component'],
							colorScheme['Ansi 9 Color']['Green Component'],
							colorScheme['Ansi 9 Color']['Blue Component']
						),
						green: rgbToHex(
							colorScheme['Ansi 10 Color']['Red Component'],
							colorScheme['Ansi 10 Color']['Green Component'],
							colorScheme['Ansi 10 Color']['Blue Component']
						),
						yellow: rgbToHex(
							colorScheme['Ansi 11 Color']['Red Component'],
							colorScheme['Ansi 11 Color']['Green Component'],
							colorScheme['Ansi 11 Color']['Blue Component']
						),
						blue: rgbToHex(
							colorScheme['Ansi 12 Color']['Red Component'],
							colorScheme['Ansi 12 Color']['Green Component'],
							colorScheme['Ansi 12 Color']['Blue Component']
						),
						magenta: rgbToHex(
							colorScheme['Ansi 13 Color']['Red Component'],
							colorScheme['Ansi 13 Color']['Green Component'],
							colorScheme['Ansi 13 Color']['Blue Component']
						),
						cyan: rgbToHex(
							colorScheme['Ansi 14 Color']['Red Component'],
							colorScheme['Ansi 14 Color']['Green Component'],
							colorScheme['Ansi 14 Color']['Blue Component']
						),
						white: rgbToHex(
							colorScheme['Ansi 15 Color']['Red Component'],
							colorScheme['Ansi 15 Color']['Green Component'],
							colorScheme['Ansi 15 Color']['Blue Component']
						),
					},
				},
			});
			alert('Color scheme loaded!');
		} catch (e) {
			console.log(e);
			alert("Couldn't load the color scheme.");
		}
	}

	return (
		<>
			<input type='checkbox' id='iterm-modal' className='modal-toggle' aria-label='Toggle iTerm Modal' />
			<label htmlFor='iterm-modal' className='modal cursor-pointer modal-bottom sm:modal-middle'>
				<label className='modal-box flex flex-col justify-center overflow-x-hidden' htmlFor=''>
					<h2 className='text-lg font-semibold mb-1'>iTerm Color Scheme</h2>
					<p className='mb-2'>Load iTerm Color Scheme from URL.</p>
					<div className='form-control'>
						<div className='input-group'>
							<input
								type='URL'
								placeholder='File Link'
								value={fileURL}
								onChange={(e) => setFileURL(e.target.value)}
								className='input input-bordered w-full'
							/>
							<label htmlFor='iterm-modal' className='btn btn-square' onClick={loadTheme}>
								<InboxInIcon className='w-6 h-6' />
							</label>
						</div>
					</div>
					<div className='divider'></div>
					<p>
						<span className='text-slate-500'>Tip: </span>
						If used with GitHub, please use the raw link to prevent any problems (
						<code className='text-sm'>raw.githubusercontent.com</code>).
					</p>
				</label>
			</label>
		</>
	);
}

export default AppDrawerModalsiTermColors;
