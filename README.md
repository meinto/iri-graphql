# iri-graphql - iota reference implementation graphql

## Getting started

```
npm run build
npm start
```

**for development**

`npm run dev`

## Tunneling

If you install the graphql express server on the same server where your iri is installed, you don't have to worry about this.

When you want to run this graphql locally and your iri is remote, then you must open a ssh tunnel to your iri.

```ssh -p <ssh port> -N -L <iota-pm-port>:localhost:<iota-pm-port> <user-name>@<server-ip>```

[see here](http://iri-playbook.readthedocs.io/en/master/remote-access.html?highlight=tunnel#for-any-type-of-bash-command-line-mac-linux-windows-bash)

## Config (optional)

The config parameters to run the graphql are set in the `src/config/config.yml` which is loaded on startup. If you want to override this default config you can provide a `dev.config.yml` or a `prd.config.yml` in the same folder (before running `npm run build`). These specific config files override the default config values defined in the `config.yml`.

The `dev.config.yml` is chosen by running `npm run dev` and the `prd.config.yml` in all other cases.

**config values** 

```yml
endpoints:
  graphql: /graphql     # under this url graphql is running

server:
  port: 13204           # port on which graphql server is running

iri:
  domain: 'localhost'
  port: 14265
  apiVersion: '1.4'
```

## Queries

- getNodeInfo
- getNeighbours

## Mutations 

- addNeighbors
- removeNeigbors

# Feedback

**PR's welcome!**

If you have a question or feature request open an issue!