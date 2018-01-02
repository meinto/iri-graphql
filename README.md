# iri graphql

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

## Config

TBD

## Queries

- getNodeInfo
- getNeighbours

## Mutations 

- addNeighbors
- removeNeigbors