import AppDrawerToggleButton from '@components/App/Drawer/ToggleButton';
import AppTitle from '../Title';
import { DownloadIcon } from '@heroicons/react/outline';

import YAML from 'json-to-pretty-yaml';
import { useAppContext } from '@lib/AppContext';

function AppNavbar() {
	const [context, setContext] = useAppContext();

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

	return (
		<div className='navbar bg-base-100'>
			<div className='flex-none'>
				<AppDrawerToggleButton />
			</div>
			<div className='flex-1'>
				<AppTitle placement='NAVBAR' />
			</div>
			<div className='flex-none'>
				<button className='btn gap-2 bg-black' onClick={downloadTheme}>
					<DownloadIcon className='w-6 h-6' />
					Download
				</button>
			</div>
		</div>
	);
}

export default AppNavbar;
