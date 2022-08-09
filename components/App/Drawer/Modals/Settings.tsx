function AppDrawerModalsSettings() {
	return (
		<>
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
		</>
	);
}

export default AppDrawerModalsSettings;
