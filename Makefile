# THIS MAKEFILE HELPS YOU TO MANAGE PROJECT DEVELOPMENT WITH DOCKER

CONTAINER_NAME ?= recoil-states-manager
NODE_VERSION   ?= 14
EXPOSED_PORT   ?= 8080
DOCKER_BIN     ?= /usr/local/bin/docker
NPM            ?= $(DOCKER_BIN) exec -it $(CONTAINER_NAME) npm

#
##@ HELP
#

help:  ## Display help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
.DEFAULT_GOAL := help

#
##@ SETUP
#

install: ## Install project
install: up
	@${NPM} install;

#
##@ USAGE
#

start: ## Start dev server
start: up
	@${NPM} start;

dist: ## Compile files to dist folder
dist: up
	@${NPM} run dist;

lint: ## Run linter
lint: up
	@${NPM} run lint;

prettier: ## Run prettier
prettier: up
	@${NPM} run prettier;

test: ## Run tests
test: up
	@${NPM} run test;

#
##@ DOCKER
#

up: ## Start container
	@if [ $(shell ${DOCKER_BIN} ps | grep ${CONTAINER_NAME} | wc -l) -eq 0 ]; then \
		${DOCKER_BIN} run --rm -d \
			--name ${CONTAINER_NAME} \
			-v ${PWD}:/app \
			-w /app \
			-p ${EXPOSED_PORT}:8080 \
			node:${NODE_VERSION} \
			tail -f /dev/null; \
	fi;

down: ## Stop and remove container
	@${DOCKER_BIN} stop ${CONTAINER_NAME};

terminal: ## Open container bash as normal user
	@${DOCKER_BIN} exec -it -u 1000 ${CONTAINER_NAME} bash;

terminal-root: ## Open container bash as root user
	@${DOCKER_BIN} exec -it -u 0 ${CONTAINER_NAME} bash;
