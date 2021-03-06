/// <reference path='fourslash.ts'/>

//// export interface Config {
////    files: ConfigFiles
//// }

//// export interface ConfigFiles {
////   jspm: string;
////   'jspm:browser': string;
//// }

//// let config: Config;
//// config = {
////    files: {
////        /*0*/: '',
////        '/*1*/': ''
////    }
//// }

verify.completions(
    { marker: "0", exact: ["jspm", '"jspm:browser"'] },
    { marker: "1", exact: ["jspm", "jspm:browser"] },
);
