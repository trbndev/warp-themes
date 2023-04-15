import Link from 'next/link';

export default function Sale() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='bg-slate-100 mx-auto w-[80ch] px-12 py-12 rounded-md'>
        <header className='border-b py-2'>
          <Link href='/'>← Go Back</Link>
        </header>
        <div className='prose prose-slate my-12'>
          <h1>Warp-Themes & Warp-Companion are for Sale 💰</h1>
          <p>I'm selling Warp-Themes & Warp-Companion because I don't have the time to maintain it anymore due to my studies and work.</p>

          <h2>What you get:</h2>
          <ul>
            <li>
              <a href='https://warp-themes.com'>🌐 warp-themes.com (expires 16.08.2023)</a> (Domain)
            </li>
            <li>
              <a href='https://github.com/haackt/warp-themes' target='_blank' rel='noopener noreferrer'>
                🎨 warp-themes.com
              </a>{' '}
              (GitHub Repository)
            </li>
            <li>
              <a href='https://github.com/haackt/warp-companion' target='_blank' rel='noopener noreferrer'>
                🧙🏻 Warp Companion
              </a>{' '}
              (VS-Code extension)
            </li>
            <li>🔥 Access to the Firestore Database</li>
          </ul>
          <ul>
            <li></li>
          </ul>
          <p>
            If you're interested in buying it, please <a href='mailto:haack.t@icloud.com'>send me an email</a> or{' '}
            <a href='https://twitter.com/torben_haack'>contact me over at Twitter @torben_haack</a>.
          </p>
          <p>
            The price can be negotiated. I'm open to <strong>any</strong> offers.
          </p>
          <p>— Torben Haack</p>
        </div>
      </div>
    </div>
  );
}
