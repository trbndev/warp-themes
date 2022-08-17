import Head from 'next/head';

import AppLayout from '@components/App/Layout';
import AppNavbar from '@components/App/Navbar';
import AppSidebar from '@components/App/Sidebar';
import WarpApp from '@components/Warp';

function IndexPage() {
	return (
		<>
			<Head>
				<link
					rel='icon'
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
					<path fill-rule='evenodd' d='M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z' clip-rule='evenodd' />
				</svg>"
				/>

				<title>Warp-Themes - Theme Builder for Warp</title>
				<meta name='title' content='Warp-Themes - Theme Builder for Warp' />
				<meta
					name='description'
					content='With Warp-Themes you can easily create themes for the Warp Terminal ✨'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://warp-themes.com/' />
				<meta property='og:title' content='Warp-Themes - Theme Builder for Warp' />
				<meta
					property='og:description'
					content='With Warp-Themes you can easily create themes for the Warp Terminal ✨'
				/>
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/trbnhck/warp-themes/main/.github/assets/hero.png'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://warp-themes.com/' />
				<meta property='twitter:title' content='Warp-Themes - Theme Builder for Warp' />
				<meta
					property='twitter:description'
					content='With Warp-Themes you can easily create themes for the Warp Terminal ✨'
				/>
				<meta
					property='twitter:image'
					content='https://raw.githubusercontent.com/trbnhck/warp-themes/main/.github/assets/hero.png'
				/>
				<meta name='keywords' content='Warp, Theme, Creator, Terminal, Color, Warp-Themes' />
				<meta name='robots' content='index, follow' />
			
			    <script data-goatcounter="https://haack.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
			</Head>
			<AppLayout Navbar={<AppNavbar />} Sidebar={<AppSidebar />} WarpApp={<WarpApp />} />
		</>
	);
}

export default IndexPage;
