// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBapDClb2K0PxLkKcs06Ysa53vkl76EsOo',
    authDomain: 'fireblog-d13b5.firebaseapp.com',
    databaseURL: 'https://fireblog-d13b5.firebaseio.com',
    projectId: 'fireblog-d13b5',
    storageBucket: 'fireblog-d13b5.appspot.com',
    messagingSenderId: '468293654396'
  }
};
