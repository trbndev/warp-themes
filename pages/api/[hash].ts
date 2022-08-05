import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
	const { hash } = request.query;
	const yaml = Buffer.from(hash as string, 'base64').toString('ascii');
	const script = `#!/bin/bash
# Theme Configuration
readonly THEME_NAME="%THEME_NAME%"
readonly THEME_CONTENT='%THEME_INPUT%'
# Warp Variables
readonly WARP_THEME_DIR="$HOME/.warp/themes"
# Colors
GREEN_BOLD="\\033[1;32m"
RESET="\\033[0m"
YELLOW="\\033[1;33m"
RED_BOLD="\\033[1;31m"
BLUE_BOLD="\\033[1;34m"
printf "\${BLUE_BOLD}Installing theme: \${RESET}%s\n" "\${THEME_NAME}"
# Check if WARP_THEME_DIR exists
if [ ! -d "\${WARP_THEME_DIR}" ]; then
	printf "\${YELLOW}Creating Warp Theme Directory:\${RESET} %s\n" "\${WARP_THEME_DIR}"
	mkdir -p "\${WARP_THEME_DIR}"
fi
# Check if theme file already exists
if [ -f "\${WARP_THEME_DIR}/\${THEME_NAME}.yaml" ]; then
	printf "\${RED_BOLD}Theme already exists:\${RESET} %s\n\${RED_BOLD}Delete the file to continue\n\nCopy: \${RESET}rm \${WARP_THEME_DIR}/\${THEME_NAME}.yaml\n" "\${WARP_THEME_DIR}/\${THEME_NAME}.yaml"
	exit 1
fi
touch "\${WARP_THEME_DIR}/\${THEME_NAME}.yaml"
echo "\${THEME_CONTENT}" > "\${WARP_THEME_DIR}/\${THEME_NAME}.yaml"	
printf "\${GREEN_BOLD}Successfully installed the theme \nRestart Warp to apply your newly installed theme ✨\n"`;

	response
		.status(200)
		.send(
			script
				.replace('%THEME_NAME%', yaml.split(';')[0])
				.replace('%THEME_INPUT%', yaml.replace(yaml.split(';')[0] + ';', ''))
		);
}
