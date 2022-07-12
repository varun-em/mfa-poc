## Create Root Config or Single SPA Application

```
npx create-single-spa
```

## Run Root Config

```
cd root-config
npm start
```

## Run Microfrontend 1 (components)

```
cd components
npm start -- --port 8050
```

## Run Microfrontend 2 (auth-ui)

```
cd auth-ui
npm start -- --port 8051
```

## Run Server

```
cd auth-server
npm start
```

## Browser

- View localhost:9000 for the full app
- View localhost:8050 for the mircrofrontend 1
- View localhost:8051 for the mircrofrontend 2
