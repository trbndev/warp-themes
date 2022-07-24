#!/usr/bin/env bash
# ---------------------------------------------------------------------------- #
#                          Example Installation Script                         #
# ---------------------------------------------------------------------------- #
#                                                                              #
#   This script wont be used in production and is only used for development.   #
#                                                                              #
# ---------------------------------------------------------------------------- #

# Colors
BOLD="\033[1m"
BOLD_RED="\033[1;31m"
PURPLE="\033[0;35m"
DIM="\033[2m"
NC="\033[0m"
DIM_BOLD="\033[1;30m"
WHITE_BOLD="\033[1;37m"

# Theme Variables
theme_name="warp_dark"
theme_contents="%THEME_CONTENTS%"
theme_preview="%THEME_PREVIEW%"

# Warp Variables
warp_config_dir="$HOME/.warp2"
warp_theme_dir="${warp_config_dir}/themes"

# Introduction
echo ""
echo -e "${WHITE_BOLD}Warp Theme Installer${NC}"
echo ""
echo -e "${DIM}Theme:	 ${NC}${PURPLE}${theme_name}${NC}"
echo -e "${DIM}Preview: ${NC}${PURPLE}${theme_preview}${NC}"


echo ""
echo -e -n "Would you like to start the installation process? [${BOLD}Y${NC}/n] "
read start_installation
echo ""

if [[ "${start_installation}" = "n" || "${start_installation}" = "N" ]]; then
		echo -e "${BOLD_RED}ERROR: ${NC}User aborted installation."
		exit 1
fi

# Check if Warp config directory exists
if [ ! -d "${warp_config_dir}" ]; then
	echo -e "${BOLD_RED}ERROR: ${NC}Warp config directory does not exist."
	echo ""

	echo -e -n "Would you like to create it [${BOLD}Y${NC}/n] "
	read create_config_dir

	if [[ "${create_config_dir}" = "n" || "${create_config_dir}" = "N" ]]; then
		exit 1
	fi

	mkdir -p "${warp_theme_dir}"
fi

# Check if theme is already installed
if [ -f "${warp_theme_dir}/${theme_name}" ]; then
	echo -e "${BOLD_RED}ERROR: ${NC}Theme is already installed."
	exit 1
fi