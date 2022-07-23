import { MenuIcon } from '@heroicons/react/outline';

function AppDrawerToggleButton() {
	return (
		<label htmlFor='app-drawer' className='btn btn-ghost drawer-button lg:hidden mr-2'>
			<MenuIcon className='h-6 w-6' />
		</label>
	);
}

export default AppDrawerToggleButton;
