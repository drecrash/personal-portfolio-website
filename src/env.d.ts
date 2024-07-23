/// <reference path="../.astro/types.d.ts" />

/// <reference types="astro/client" />

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DISBOOK_API_KEY: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}