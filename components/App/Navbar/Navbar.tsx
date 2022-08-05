import AppDrawerToggleButton from '@components/App/Drawer/ToggleButton';
import AppTitle from '../Title';
import {
	DownloadIcon,
	AdjustmentsIcon,
	CashIcon,
	IdentificationIcon,
	ExternalLinkIcon,
	AtSymbolIcon,
} from '@heroicons/react/outline';
import { DotsVerticalIcon } from '@heroicons/react/solid';

import YAML from 'json-to-pretty-yaml';
import { useAppContext } from '@lib/AppContext';

function AppNavbar() {
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

	return (
		<div className='navbar bg-base-100'>
			<div className='flex-none'>
				<AppDrawerToggleButton />
			</div>
			<div className='flex-1'>
				<AppTitle placement='NAVBAR' />
			</div>
			<div className='flex-none gap-4'>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-square m-1'>
						<DotsVerticalIcon className='w-6 h-6' />
					</label>
					<ul
						tabIndex={0}
						className='dropdown-content menu p-2 mt-4 drop-shadow-md bg-base-100 rounded-box w-52'
					>
						<li className='menu-title'>
							<span>General</span>
						</li>
						<li>
							<label htmlFor='download-modal' className='modal-button'>
								<DownloadIcon className='w-6 h-6' />
								Download
							</label>
						</li>
						<li className='disabled'>
							{/*htmlFor='settings-modal'*/}
							<label className='modal-buton flex items-center'>
								<AdjustmentsIcon className='w-6 h-6' />
								Settings
								<div className='badge badge-sm badge-primary'>Coming</div>
							</label>
						</li>
						<li className='menu-title'>
							<span>More</span>
						</li>
						<li>
							<a>
								<IdentificationIcon className='w-6 h-6' />
								About
							</a>
						</li>
						<li>
							<a href='https://www.buymeacoffee.com/haack' target='_blank' rel='noopener noreferrer'>
								<CashIcon className='w-6 h-6 inline' />
								Donate
								<ExternalLinkIcon className='w-4 h-4 ml-auto' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AppNavbar;
