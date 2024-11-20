lint:
	npx eslint .

install:
	npm ci

build: install
	rm -rf dist
	npm run build

start: build
	npm run start

local-build:
	npm run local-build

.PHONY: build install local-build
