import { HexColorPicker } from 'react-colorful';

function ColorInput(props) {
	const { name, color, setColor } = props;

	//TODO: aria-valuenow is missing on HexColorPicker, need a way to fix it
	return (
		<div className='my-4 flex flex-row items-center justify-evenly bg-white text-center'>
			<div className='flex flex-col'>
				<div className='flex h-auto w-32 flex-col rounded-xl border drop-shadow-sm'>
					<HexColorPicker color={color} onChange={setColor} />
					<div className='mt-2 px-2 text-left'>
						<label className='whitespace-nowrap text-slate-600'>{name}</label>
						<input
							type='text'
							className='mb-3 bg-inherit font-medium outline-none'
							value={color}
							spellCheck={false}
							onChange={(e) => setColor(e.target.value)}
							aria-label={name}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ColorInput;
