import Navbar from '@components/App/Navbar';
import Sidebar from '@components/App/Sidebar';
import AppDrawerModals from './Modals/';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

function AppDrawer(props) {
	const { children } = props;

	useEffect(() => {
		const toastId = toast.custom((t) => (
			<Transition
				show={t.visible}
				enter='transition-opacity duration-75'
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leave='transition-opacity duration-150'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'
			>
				<div className='bg-white px-6 py-4 shadow-md rounded-md border'>
					<p>
						Welcome to <span className='font-medium'>Warp-Theme</span>! 👋 <br />
						<i>Warp-Theme</i> is a theme builder for{' '}
						<a href='https://warp.dev' target='_blank' className='text-blue-600 hover:text-blue-700'>
							Warp
						</a>
						.
					</p>
					<div className='flex gap-2'>
						<label
							htmlFor='about-modal'
							className='btn flex-grow btn-ghost text-primary modal-button'
							onClick={() => toast.dismiss(toastId)}
						>
							Learn more
						</label>
						<button onClick={() => toast.dismiss(toastId)} className='btn btn-ghost flex-grow text-red-600'>
							Dismiss
						</button>
					</div>
				</div>
			</Transition>
		));
	}, []);

	return (
		<div className='drawer drawer-mobile'>
			<AppDrawerModals />
			<Toaster position='bottom-right' toastOptions={{ duration: 10000 }} />
			<input id='app-drawer' type='checkbox' className='drawer-toggle' aria-label='Toggle App Sidebar' />
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
