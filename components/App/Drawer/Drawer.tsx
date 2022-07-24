import Navbar from '@components/App/Navbar';
import Sidebar from '@components/App/Sidebar';

function AppDrawer(props) {
	const { children } = props;

	return (
		<div className='drawer drawer-mobile'>
			<input type='checkbox' id='settings-modal' className='modal-toggle' />
			<label htmlFor='settings-modal' className='modal cursor-pointer modal-bottom sm:modal-middle'>
				<label className='modal-box relative' htmlFor=''>
					<h3 className='text-lg font-bold'>Settings</h3>
					<p className='py-4'>Coming soon</p>
				</label>
			</label>
			<input id='app-drawer' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col bg-slate-100'>
				<Navbar />
				<main className='flex flex-col justify-center items-center flex-grow border'>{children}</main>
			</div>
			<div className='drawer-side'>
				<label htmlFor='app-drawer' className='drawer-overlay' />
				<Sidebar />
			</div>
		</div>
	);
}

export default AppDrawer;
