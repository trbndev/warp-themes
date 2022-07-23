interface Props {
	placement: 'NAVBAR' | 'SIDEBAR';
}

function AppTitle(props: Props) {
	const conditionalVisibility = props.placement == 'NAVBAR' ? 'lg:hidden' : 'hidden lg:block mb-6';
	return <a className={['normal-case text-2xl font-bold', conditionalVisibility].join(' ')}>Warp Theme</a>;
}

export default AppTitle;
