CAROOT=$(CURDIR)/certs/root
export CAROOT
TRUST_STORES=system,nss
export TRUST_STORES

up: install certs
	@printf "💄 Please wait we take care of all...\n\n"
	@traefik &
	@yarn dev
	@printf "\n\nEverything is ready, enjoy 🎉\nRun make logs if you want some 💡\n\n"
.PHONY: up

ifeq ($(CI),)
install:
	@yarn install
.PHONY: install
else
install:
endif

down:
	@pkill -f "traefik"
.PHONY: down

ifeq ($(CI),)
certs:
	mkcert -uninstall
	sudo rm -rf /etc/ssl/certs/mkcert*
	mkdir -p certs/root
	mkcert -cert-file certs/cert.pem -key-file certs/key.pem "clementmuth.localhost" "bore.pub"
	mkcert -install
else
certs:
endif
