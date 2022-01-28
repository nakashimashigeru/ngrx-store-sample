## generate AppRoutingModule

```sh
ng generate module app-routing --flat --module=app
```

## Application (users)

```sh
ng generate module users
ng generate component users --module users
ng generate service users/services/user
ng generate component users/components/add-user --module users
ng generate component users/components/edit-user --module users
```

## Library (shared-design)

```sh
ng generate library shared-design
```

## @ngrx/component-store (Installing with npm)

```sh
npm install @ngrx/component-store --save
```

## pm2 (Installing with npm)

```sh
npm install -D pm2
```

## pm2 (mock start)

```sh
npm run mock.start
```

## pm2 (mock reload)

```sh
npm run mock.reload
```

## pm2 (mock stop)

```sh
npm run mock.stop
```

## pm2 (mock kill)

```sh
npm run mock.kill
```

## @fortawesome/angular-fontawesome (Installing with npm)

```sh
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/angular-fontawesome
```

## json-server (Installing with npm)

```sh
npm install -D json-server
```

## json-server (run server)

```sh
npm run json:server
```

## @ngrx/effects (Installing with npm)

```sh
npm install -D @ngrx/effects
```

## @ngrx/entity (Installing with npm)

```sh
npm install -D @ngrx/entity
```

## @ngrx/schematics (action effect reducer selector)

```sh
ng generate @ngrx/schematics:action users/+state/User
ng generate @ngrx/schematics:effect users/+state/User --module users/users.module.ts
ng generate @ngrx/schematics:reducer users/+state/User
ng generate @ngrx/schematics:selector users/+state/User
```
