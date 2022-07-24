import { useState, useEffect, Fragment } from 'react';
import { useAppContext } from '@lib/AppContext';

import AppTitle from '../Title';
import ColorInput from './ColorInput';
import { Tab } from '@headlessui/react';
import ThemeInput from './ThemeInput';
import SidebarTitle from './Title';

function AppSidebar() {
	const [context, setContext] = useAppContext();
	const [themeName, setThemeName] = useState(context.name);
	const [accentColor, setAccentColor] = useState(context.accent.color);
	const [backgroundColor, setBackgroundColor] = useState(context.background.color);
	const [foregroundColor, setForegroundColor] = useState(context.foreground);
	const [details, setDetails] = useState(context.details);
	const [normalBlack, setNormalBlack] = useState(context.terminal_colors.normal.black);
	const [normalRed, setNormalRed] = useState(context.terminal_colors.normal.red);
	const [normalGreen, setNormalGreen] = useState(context.terminal_colors.normal.green);
	const [normalYellow, setNormalYellow] = useState(context.terminal_colors.normal.yellow);
	const [normalBlue, setNormalBlue] = useState(context.terminal_colors.normal.blue);
	const [normalMagenta, setNormalMagenta] = useState(context.terminal_colors.normal.magenta);
	const [normalCyan, setNormalCyan] = useState(context.terminal_colors.normal.cyan);
	const [normalWhite, setNormalWhite] = useState(context.terminal_colors.normal.white);
	const [brightBlack, setBrightBlack] = useState(context.terminal_colors.bright.black);
	const [brightRed, setBrightRed] = useState(context.terminal_colors.bright.red);
	const [brightGreen, setBrightGreen] = useState(context.terminal_colors.bright.green);
	const [brightYellow, setBrightYellow] = useState(context.terminal_colors.bright.yellow);
	const [brightBlue, setBrightBlue] = useState(context.terminal_colors.bright.blue);
	const [brightMagenta, setBrightMagenta] = useState(context.terminal_colors.bright.magenta);
	const [brightCyan, setBrightCyan] = useState(context.terminal_colors.bright.cyan);
	const [brightWhite, setBrightWhite] = useState(context.terminal_colors.bright.white);

	useEffect(() => {
		setContext({
			...context,
			name: themeName,
		});
	}, [themeName]);

	useEffect(() => {
		setContext({
			...context,
			accent: {
				...context.accent,
				color: accentColor,
			},
		});
	}, [accentColor]);

	useEffect(() => {
		setContext({
			...context,
			background: {
				...context.background,
				color: backgroundColor,
			},
		});
	}, [backgroundColor]);

	useEffect(() => {
		setContext({
			...context,
			foreground: foregroundColor,
		});
	}, [foregroundColor]);

	useEffect(() => {
		setContext({
			...context,
			details: details,
		});
	}, [details]);

	useEffect(() => {
		setContext({
			...context,
			terminal_colors: {
				...context.terminal_colors,
				normal: {
					...context.terminal_colors.normal,
					black: normalBlack,
					red: normalRed,
					green: normalGreen,
					yellow: normalYellow,
					blue: normalBlue,
					magenta: normalMagenta,
					cyan: normalCyan,
					white: normalWhite,
				},
				bright: {
					...context.terminal_colors.bright,
					black: brightBlack,
					red: brightRed,
					green: brightGreen,
					yellow: brightYellow,
					blue: brightBlue,
					magenta: brightMagenta,
					cyan: brightCyan,
					white: brightWhite,
				},
			},
		});
	}, [
		normalBlack,
		normalRed,
		normalGreen,
		normalYellow,
		normalBlue,

		normalMagenta,
		normalCyan,
		normalWhite,
		brightBlack,
		brightRed,
		brightGreen,
		brightYellow,
		brightBlue,
		brightMagenta,
		brightCyan,
		brightWhite,
	]);

	const styles = [
		'w-full rounded-md outline-none bg-gray-50',
		'w-full rounded-md bg-white py-2 font-semibold text-gray-200 bg-gray-800 drop-shadow-sm border border-gray-400 outline-none',
	];

	return (
		<div className='px-4 pt-4 overflow-y-auto w-fit bg-base-100 text-base-content z-40'>
			<AppTitle placement='SIDEBAR' />
			<ThemeInput
				themeValue={themeName}
				themeOnChange={setThemeName}
				detailsValue={details}
				detailsOnChange={setDetails}
			/>
			<SidebarTitle>General Colors</SidebarTitle>
			<div className='mb-4 flex flex-row space-x-6'>
				<ColorInput name='Accent' color={accentColor} setColor={setAccentColor} />
				<ColorInput name='Background' color={backgroundColor} setColor={setBackgroundColor} />
				<ColorInput name='Foreground' color={foregroundColor} setColor={setForegroundColor} />
			</div>
			<SidebarTitle>Terminal Colors</SidebarTitle>
			<Tab.Group>
				<Tab.List className='flex flex-row justify-between space-x-4 rounded-lg py-4 text-lg'>
					<Tab as={Fragment}>
						{({ selected }) => {
							return <button className={selected ? styles[1] : styles[0]}>Normal</button>;
						}}
					</Tab>
					<Tab as={Fragment}>
						{({ selected }) => {
							return <button className={selected ? styles[1] : styles[0]}>Bright</button>;
						}}
					</Tab>
					<hr />
				</Tab.List>
				<Tab.Panels className='mb-6 rounded-md py-2 '>
					<Tab.Panel>
						<div className='flex flex-row space-x-6'>
							<ColorInput name='Black' color={normalBlack} setColor={setNormalBlack} />
							<ColorInput name='Red' color={normalRed} setColor={setNormalRed} />
							<ColorInput name='Green' color={normalGreen} setColor={setNormalGreen} />
						</div>
						<div className='flex flex-row space-x-6'>
							<ColorInput name='Yellow' color={normalYellow} setColor={setNormalYellow} />
							<ColorInput name='Blue' color={normalBlue} setColor={setNormalBlue} />
							<ColorInput name='Magenta' color={normalMagenta} setColor={setNormalMagenta} />
						</div>
						<div className='flex flex-row space-x-6'>
							<ColorInput name='Cyan' color={normalCyan} setColor={setNormalCyan} />
							<ColorInput name='White' color={normalWhite} setColor={setNormalWhite} />
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div className='flex flex-row space-x-6'>
							<ColorInput name='Bright Black' color={brightBlack} setColor={setBrightBlack} />
							<ColorInput name='Bright Red' color={brightRed} setColor={setBrightRed} />
							<ColorInput name='Bright Green' color={brightGreen} setColor={setBrightGreen} />
						</div>
						<div className='flex flex-row space-x-6'>
							<ColorInput name='Bright Yellow' color={brightYellow} setColor={setBrightYellow} />
							<ColorInput name='Bright Blue' color={brightBlue} setColor={setBrightBlue} />
							<ColorInput name='Bright Magenta' color={brightMagenta} setColor={setBrightMagenta} />
						</div>
						<div className='flex flex-row space-x-6'>
							<ColorInput name='Bright Cyan' color={brightCyan} setColor={setBrightCyan} />
							<ColorInput name='Bright White' color={brightWhite} setColor={setBrightWhite} />
						</div>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='-mt-14'>
				<path
					fill='#f3f4f5'
					fillOpacity={1}
					d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
				/>
			</svg>
		</div>
	);
}

export default AppSidebar;
