#!/usr/bin/env bash

NORMAL=""

BLINK=""
BOLD=""
REVERSE=""
UNDERLINE=""

BLACK=""
BLUE=""
CYAN=""
GREEN=""
LIME_YELLOW=""
MAGENTA=""
ORANGE=""
PINK=""
POWDER_BLUE=""
PURPLE=""
RED=""
WHITE=""
YELLOW=""

# Check if stdout is a terminal...
if [ -t 1 ]; then
  # See if it supports colors...
  ncolors="$(tput colors)"

  if [ -n "$ncolors" ] && [ "$ncolors" -ge 8 ]; then
    NORMAL="$(tput sgr0)"

    BLINK="$(tput blink)"
    BOLD="$(tput bold)"
    REVERSE="$(tput smso)"
    UNDERLINE="$(tput smul)"

    BLACK="$(tput setaf 0)"
    BLUE="$(tput setaf 4)"
    CYAN="$(tput setaf 123)"
    GREEN="$(tput setaf 2)"
    LIME_YELLOW=$(tput setaf 190)
    MAGENTA="$(tput setaf 5)"
    ORANGE=$(tput setaf 208)
    PINK=$(tput setaf 199)
    POWDER_BLUE=$(tput setaf 117)
    PURPLE=$(tput setaf 54)
    RED="$(tput setaf 1)"
    WHITE="$(tput setaf 7)"
    YELLOW="$(tput setaf 3)"
  fi
fi

function blink() {
  echo "${BLINK}${1//"${NORMAL}"/"${NORMAL}${BLINK}"}${NORMAL}"
}
function bold() {
  echo "${BOLD}${1//"${NORMAL}"/"${NORMAL}${BOLD}"}${NORMAL}"
}
function underline() {
  echo "${UNDERLINE}${1//"${NORMAL}"/"${NORMAL}${UNDERLINE}"}${NORMAL}"
}
function reverse() {
  echo "${REVERSE}${1//"${NORMAL}"/"${NORMAL}${REVERSE}"}${NORMAL}"
}

function black() {
  echo "${BLACK}${1//"${NORMAL}"/"${NORMAL}${BLACK}"}${NORMAL}"
}
function blue() {
  echo "${BLUE}${1//"${NORMAL}"/"${NORMAL}${BLUE}"}${NORMAL}"
}
function cyan() {
  echo "${CYAN}${1//"${NORMAL}"/"${NORMAL}${CYAN}"}${NORMAL}"
}
function green() {
  echo "${GREEN}${1//"${NORMAL}"/"${NORMAL}${GREEN}"}${NORMAL}"
}
function light_blue() {
  echo "${POWDER_BLUE}${1//"${NORMAL}"/"${NORMAL}${POWDER_BLUE}"}${NORMAL}"
}
function lime() {
  echo "${LIME_YELLOW}${1//"${NORMAL}"/"${NORMAL}${LIME_YELLOW}"}${NORMAL}"
}
function magenta() {
  echo "${MAGENTA}${1//"${NORMAL}"/"${NORMAL}${MAGENTA}"}${NORMAL}"
}
function orange() {
  echo "${ORANGE}${1//"${NORMAL}"/"${NORMAL}${ORANGE}"}${NORMAL}"
}
function pink() {
  echo "${PINK}${1//"${NORMAL}"/"${NORMAL}${PINK}"}${NORMAL}"
}
function purple() {
  echo "${PURPLE}${1//"${NORMAL}"/"${NORMAL}${PURPLE}"}${NORMAL}"
}
function red() {
  echo "${RED}${1//"${NORMAL}"/"${NORMAL}${RED}"}${NORMAL}"
}
function yellow() {
  echo "${YELLOW}${1//"${NORMAL}"/"${NORMAL}${YELLOW}"}${NORMAL}"
}
function white() {
  echo "${WHITE}${1//"${NORMAL}"/"${NORMAL}${WHITE}"}${NORMAL}"
}

function error() {
  echo "❌  $(red "$1")"
}
function bold_error() {
  bold "❌  $(red "$1")"
}
function warning() {
  echo "⚠️  $(yellow "$1")"
}
function bold_warning() {
  bold "⚠️  $(yellow "$1")"
}
function success() {
  echo "✔️  $(green "$1")"
}
function bold_success() {
  bold "✔️  $(green "$1")"
}
function info() {
  echo " ℹ️  $(blue "$1")"
}
function bold_info() {
  bold " ℹ️  $(blue "$1")"
}

function display_link() {
  underline "$(light_blue "$1")"
}
function display_path() {
  echo "'$(cyan "$1")'"
}
function display_branch() {
  echo "\`$(bold "$(purple "$1")")\`"
}
function display_repo() {
  echo "\"$(bold "$(orange "$1")")\""
}
function display_number() {
  bold "$(magenta "$1")"
}
