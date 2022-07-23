import Drawer from '@components/App/Drawer';
import WarpApp from '@components/Warp';

function IndexPage() {
	return (
		<Drawer>
			<WarpApp />
			<div className='landscape:hidden flex flex-row bg-orange-200 text-black/90 py-2 px-4 shadow-sm rounded mt-12 w-3/4 items-center space-x-4'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
				<p>
					This experience is designed to be viewed in landscape. Please rotate your device to view the site.
				</p>
			</div>
		</Drawer>
	);
}

export default IndexPage;
