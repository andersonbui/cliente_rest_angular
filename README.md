# MyApp

Este proyectofue generado mediante  [Angular CLI](https://github.com/angular/angular-cli) Angular CLI: 6.0.3

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build

Ejecutar `ng build` para instalar las dependencias.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

este proyecto utiliza un proxy configurado en el archivo "proxy.conf.json" para poder acceder al servicio de consulta de productos y registro de pedidos

Este programa se debe ejecutar con la intruccion: "ng serve  --proxy-config proxy.conf.json --host 0.0.0.0" para ejecutarlo con el proxy y tener acceso desde cualquier ip
o tambien con el comando "npm start" que esta configurado para que se ejecute como en la primera instruccion pero sin acceso desde cualquier ip.

