import { ExternalLinkIcon } from '@heroicons/react/outline';

function AppDrawerModalsAbout() {
	return (
		<>
			<input type='checkbox' id='about-modal' className='modal-toggle' aria-label='Toggle About Modal' />
			<label htmlFor='about-modal' className='modal cursor-pointer modal-bottom sm:modal-middle'>
				<label className='modal-box flex flex-col justify-center overflow-x-hidden' htmlFor=''>
					<h3 className='text-2xl font-bold mb-4'>About</h3>
					<p className='mb-2'>
						<span className='text-primary font-medium'>Warp-Theme</span> is a visual theme builder for the{' '}
						<a href='https://warp.dev/' target='_blank'>
							Warp
						</a>{' '}
						Terminal.
					</p>
					<h4 className='text-xl font-semibold'>Features</h4>
					<ul className='list-disc list-inside'>
						<li>
							<span className='font-medium'>Visually</span> create your theme
						</li>
						<li>
							<span className='font-medium'>Automatic Installation</span> process provided out of the box
						</li>
						<li className='mb-2'>
							Make <span className='font-medium'>iTerm Color Schemes</span> compatible with Warp
						</li>
					</ul>
					<h4 className='text-xl font-semibold mb-1'>Useful links</h4>
					<ul className='text-gray-600'>
						<li className='hover:text-gray-900'>
							<a
								href='https://www.warp.dev/'
								target='_blank'
								className='flex items-center flex-row space-x-2'
								rel='noopener noreferrer'
							>
								<span>Warp - The terminal for the 21st century</span>
								<ExternalLinkIcon className='w-4 h-4' />
							</a>
						</li>
						<li className='hover:text-gray-900'>
							<a
								href='https://docs.warp.dev/features/themes'
								target='_blank'
								className='flex items-center flex-row space-x-2'
								rel='noopener noreferrer'
							>
								<span>Themes - Warp Documentation</span>
								<ExternalLinkIcon className='w-4 h-4' />
							</a>
						</li>
					</ul>
					<div className='divider'></div>
					<p className='text-xs text-center text-gray-700'>
						Built with Next.js, hosted on Vercel <br />
						&copy; 2022 Torben Haack
					</p>
				</label>
			</label>
		</>
	);
}

export default AppDrawerModalsAbout;
