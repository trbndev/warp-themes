import Navbar from '@components/App/Navbar';
import Sidebar from '@components/App/Sidebar';

function AppDrawer(props) {
	const { children } = props;

	return (
		<div className='drawer drawer-mobile'>
			<input type='checkbox' id='settings-modal' className='modal-toggle' />
			<div className='modal modal-bottom sm:modal-middle z-50'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>Settings</h3>
					<p className='py-4'>Coming Soon</p>
					<div className='modal-action'>
						<label htmlFor='settings-modal' className='btn'>
							Close
						</label>
					</div>
				</div>
			</div>
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
