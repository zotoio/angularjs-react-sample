# angularjs react sample

This repo shows a couple of examples of approaches to take advantage of react ui components in the context of an existing AngularJs 1.5+ app.  These approaches may be helpful during a progressive replatform.  The examples use TypeScript for both the AngularJs host app, and the React components consumed.

![screenshot](screenshot.jpg?raw=true "screenshot")

Two approaches for sharing react commponents into an AngularJs app are demonstrated.

1. **react2angular** https://github.com/coatue-oss/react2angular
2. **ngReact** (directive - also compatible below v1.5)  https://github.com/ngReact/ngReact


Note that if you wish to convert Angular 1.5+ components to React, you could look at:
    3. angular2react https://github.com/coatue-oss/angular2react

## react2angular
This module allows for React components to be used inside AngularJs 1.5+ apps.  This done by leveraging the newer Angular 'Component' type.

1. React component class is transformed to angular component, and added to app.
    - React component [app/src/react/MyReactComponentOne.ts](app/src/react/MyReactComponentOne.react.tsx)
    - Angular app register component [app/src/boot/boot.ts](app/src/boot/boot.ts)
    ```
    angularmodule('app', []).component('MyReactComponentOne', react2angular(MyReactComponentOne, ['foo', 'bar']))
    ```
2. Use the component


## ngReact
This module provides an Angular directive 'react-component' that can act as a bridge between Angular and React.

1. React component class is added to Angular app as a 'value'.
    - React component [app/src/react/MyReactComponentTwo.react.tsx](app/src/react/MyReactComponentTwo.react.tsx)
    - Angular app add value [app/src/boot/boot.ts](app/src/boot/boot.ts)
    ```
    angular.module('app', []).value('MyReactComponentTwo', MyReactComponentTwo); 
    ```
Please see the full documentation. https://github.com/coatue-oss/react2angular

2. Angular template uses the 'react-component' directive, passing React component name and props.

    ```
    <div ng-controller="SampleController">
        <react-component name="HelloComponent" props="$ctrl.selected" watch-depth="reference"/>
    </div>
    ```

> This module also provides a 'reactDirective' service that can be used as a factory for named directives.

Please see the full documentation.  https://github.com/ngReact/ngReact


