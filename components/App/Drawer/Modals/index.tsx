import AppDrawerModalsAbout from './About';
import AppDrawerModalsDownload from './Download';
import AppDrawerModalsiTermColors from './iTermColors';

function AppDrawerModals() {
	return (
		<>
			<AppDrawerModalsDownload />
			<AppDrawerModalsiTermColors />
			<AppDrawerModalsAbout />
		</>
	);
}

export default AppDrawerModals;
