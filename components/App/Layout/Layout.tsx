import type { ReactNode } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

interface Props {
	Navbar: ReactNode;
	Sidebar: ReactNode;
	WarpApp: ReactNode;
}

function AppLayout(props: Props) {
	//TODO: learn more should open about dialog
	useEffect(() => {
		window.onbeforeunload = function () {
			return true;
		};

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
				<div className={`bg-white px-6 py-4 shadow-md rounded-md`}>
					<p>
						Welcome to <span className='font-medium'>Warp-Theme</span>! 👋 <br />
						<i>Warp-Theme</i> is a theme builder for{' '}
						<a href='https://warp.dev' target='_blank' className='text-blue-500 hover:text-blue-700'>
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
						<button onClick={() => toast.dismiss(toastId)} className='btn btn-ghost flex-grow text-error'>
							Dismiss
						</button>
					</div>
				</div>
			</Transition>
		));
	}, []);

	return (
		<div className='flex h-screen flex-col'>
			<div className='w-full border-b z-20'>{props.Navbar}</div>
			<div className='flex h-full flex-row z-10'>
				<div className='h-full w-auto border-r'>{props.Sidebar}</div>
				<div className='w-full flex flex-col justify-center items-center flex-grow bg-slate-100'>
					{props.WarpApp}
				</div>
			</div>
			<Toaster position='bottom-right' toastOptions={{ duration: 10000 }} />
		</div>
	);
}

export default AppLayout;
