import { TerminalIcon } from '@heroicons/react/solid';

interface Props {
	placement: 'NAVBAR' | 'SIDEBAR';
}

function AppTitle(props: Props) {
	const conditionalVisibility = props.placement == 'NAVBAR' ? 'lg:hidden' : 'hidden lg:block mb-6';
	return (
		<a href='#' className={['normal-case text-2xl font-bold', conditionalVisibility].join(' ')}>
			<TerminalIcon className='w-8 h-8 inline' /> Warp Theme
			<span className='ml-2 text-xs font-normal italic'>by Torben Haack</span>
		</a>
	);
}

export default AppTitle;
