import Drawer from '@components/App/Drawer';
import WarpApp from '@components/Warp';

import Head from 'next/head';

function IndexPage() {
	return (
		<Drawer>
			<Head>
				<link
					rel='icon'
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
					<path fill-rule='evenodd' d='M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z' clip-rule='evenodd' />
				</svg>"
				/>

				<title>Warp-Theme - Theme Builder for Warp</title>
				<meta name='title' content='Warp-Theme - Theme Builder for Warp' />
				<meta
					name='description'
					content='With Warp-Theme you can easily create themes for the Warp Terminal ✨'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://warp-theme.vercel.app/' />
				<meta property='og:title' content='Warp-Theme - Theme Builder for Warp' />
				<meta
					property='og:description'
					content='With Warp-Theme you can easily create themes for the Warp Terminal ✨'
				/>
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/trbnhck/warp-theme/main/.github/assets/screenshot.png'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://warp-theme.vercel.app/' />
				<meta property='twitter:title' content='Warp-Theme - Theme Builder for Warp' />
				<meta
					property='twitter:description'
					content='With Warp-Theme you can easily create themes for the Warp Terminal ✨'
				/>
				<meta
					property='twitter:image'
					content='https://raw.githubusercontent.com/trbnhck/warp-theme/main/.github/assets/screenshot.png'
				/>
				<meta name='keywords' content='Warp, Theme, Creator, Terminal, Color' />
				<meta name='robots' content='index, follow' />
			</Head>
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
