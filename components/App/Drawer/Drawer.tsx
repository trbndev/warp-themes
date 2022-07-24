import Navbar from '@components/App/Navbar';
import Sidebar from '@components/App/Sidebar';

function AppDrawer(props) {
	const { children } = props;

	return (
		<div className='drawer drawer-mobile'>
			<input type='checkbox' id='settings-modal' className='modal-toggle' />
			<label htmlFor='settings-modal' className='modal cursor-pointer modal-bottom sm:modal-middle'>
				<label className='modal-box relative' htmlFor=''>
					<h3 className='text-2xl font-bold mb-4'>Settings</h3>
					<table className='w-full table-fixed border-spacing-96 '>
						<tbody>
							<tr>
								<td className='text-right pr-6 py-2'>
									<label className='text-right'>Accent Type</label>
								</td>
								<td className='text-sm py-2'>
									<select className='select select-bordered w-full'>
										<option selected>Color</option>
										<option>Gradient</option>
									</select>
								</td>
							</tr>
							<tr>
								<td className='text-right pr-6 py-2'>
									<label className='text-right'>Background Type</label>
								</td>
								<td className='text-sm py-2'>
									<select className='select select-bordered w-full'>
										<option selected>Color</option>
										<option>Gradient</option>
										<option>Image</option>
									</select>
								</td>
							</tr>
						</tbody>
					</table>
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
