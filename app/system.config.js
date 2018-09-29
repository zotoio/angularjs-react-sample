System.config({
  transpiler: 'typescript',
  defaultJSExtensions: false,

  typescriptOptions: {
      "noImplicitAny": false,
      "typeCheck": true,
      "jsx": "react"
  },

  // Set the Base URL that files will be loaded from to /dist (instead of /app)
  baseURL: '/app/src',

  // Tell it how to find our Angular dependencies
  map: {
    'angular': '../node_modules/angular/angular.js',
    'angular-animate': '../node_modules/angular-animate/angular-animate.js',
    'angular-aria': '../node_modules/angular-aria/angular-aria.js',
    'angular-material': '../node_modules/angular-material/angular-material.js',
    'angular-messages': '../node_modules/angular-messages/angular-messages.js',
    'angular-sanitize': '../node_modules/angular-sanitize/angular-sanitize.js',
    'react': '../node_modules/react/umd/react.production.min.js',
    'react-dom': '../node_modules/react-dom/umd/react-dom.production.min.js',
    'ngreact': '../node_modules/ngreact/ngReact.js',
    'typescript': '../node_modules/typescript/lib/typescript.js'
  },
  
  meta: {
    'angular': { format: 'global' },
    'angular-animate': { format: 'global' },
    'angular-aria': { format: 'global' },
    'angular-material': { format: 'global' },
    'angular-messages': { format: 'global' },
    'angular-sanitize': { format: 'global' },
    'react': {format: 'global' },
    'react-dom': { format: 'global' },
    'ngreact': {formal: 'global'},
    'typescript': {format: 'global'}
  }
});