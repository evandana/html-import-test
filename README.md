# html-import-test

Test HTML Import Deprecation

## To Run

1. Start chrome with flags: 
1. Test Pages
    - Run this app
        1. `npm run start`
        1. Navigate to [localhost:3000](localhost:3000)


## Notes

### Test the site with HTML Imports off

    1. Quit Chrome
    1. Start chrome with flags: 
        - Ignore the "unsupported flag" warning: https://github.com/TakayoshiKochi/deprecate-style-in-html-imports/issues/7
        - Chrome: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-blink-features=ShadowDOMV0,CustomElementsV0,HTMLImports`
        - Canary: `/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --disable-blink-features=HTMLImports`

### Possibly no fix needed?

    - webcomponentsjs 1.2.7 release appears to already incorporate Web Components v1 with HTML Imports (https://github.com/webcomponents/webcomponentsjs/blob/aca216f6c7870f3ac9777bde7ebb9bed692b46c5/entrypoints/webcomponents-sd-ce-pf-index.js)
    - Polymer 1.4 requires webcomponentsjs ^0.7.20 (https://github.com/Polymer/polymer/blob/v1.4.0/bower.json) and Polymer 1.10.1 requires webcomponentsjs ^0.7.24 (https://github.com/Polymer/polymer/blob/v1.4.0/bower.json), but we're using webcomponentsjs 1.2.7. It seems that this already includes a solve for our issue?