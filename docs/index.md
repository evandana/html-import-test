# html-import-test

Test HTML Import Deprecation

## Problem

> HTML Imports are deprecated at [Google Chrome] M70, and will be removed in M73, around, April 2019.
> 
> [[source](https://www.chromestatus.com/feature/5144752345317376)]

- [Browser compatibility for HTML Imports](https://caniuse.com/#search=html%20imports)
- [About HTML Imports (MDN)](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports)


## Try Your App Without HTML Import

1. Quit all instances of Chrome
1. Start Chrome with flags
    ```
    <PATH-TO-CHROME-EXECUTABLE>  --disable-blink-features=ShadowDOMV0,CustomElementsV0,HTMLImports
    ```
    - Ignore the "unsupported flag" warning ([ref](https://github.com/TakayoshiKochi/deprecate-style-in-html-imports/issues/7))
    - Also, try the flag: `--disable-blink-features=HTMLImports`
    - Example (Chrome): `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-blink-features=ShadowDOMV0,CustomElementsV0,HTMLImports`
    - Example (Canary): `/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --disable-blink-features=ShadowDOMV0,CustomElementsV0,HTMLImports`
1. Run this app
    1. `npm run start`
    1. Navigate to [localhost:3000](localhost:3000)


## Solution Options

1. Upgrade to Polymer v1.10.1+
1. Include a polyfill

### Solution Questions

- Do I have to do any refactoring or just include a library?


## Related Research Notes

### Web Components v0 deprecations & Impact on Polymer 1.x & 2.x

Excerpts from [source](https://www.polymer-project.org/blog/2018-10-02-webcomponents-v0-deprecations) article

> Chrome 70 is shipping with deprecation warnings for Custom Elements v0, Shadow DOM v0, and HTML Imports These features are scheduled to be removed in Chrome 73, shipping around March 2019.
> 
> If you have existing sites using Polymer 1.x or 2.x, you'll need to make sure you're loading the polyfills, and test your sites to make sure they'll continue to work after the native features are removed.
> 
> If you're using the polyfills, your sites should continue to function on Chrome as they do on other browsers.
> 
> The features being deprecated were only shipped in Chrome and other Chromium-based browsers, such as Opera. Most sites using Polymer 1.x or 2.x should already be using polyfills for the required features.
>
> ## Impact for Polymer 1.x
> 
> Polymer 1.x sites will require the v0 polyfills to run on Chrome. Your entrypoint (for example, index.html) probably already has code to load the polyfills. The code may be a simple script tag, like this:
> 
> ```
> <script src="/bower_components/webcomponentsjs/webcomponents-lite-min.js"></script>
> ```
> 
> Using polyfills instead of native APIs has some performance impact, and may affect the timing of some lifecycle callbacks.
> 
> In addition, Polymer's built-in shadow DOM shim ("shady DOM") may cause visible UI changes compared to native shadow DOM.
> 
> ### Shadow DOM and Shady DOM
> 
> The removal of Shadow DOM v0 affects only Polymer 1.x sites that have explicitly enabled native shadow DOM rendering where shadow DOM v0 is available.
> 
> ## Impact for Polymer 2.x
> Polymer 2.x uses the newer, standardized Custom Elements v1 and Shadow DOM v1 specifications, so it is not affected by those deprecations. However, it still uses HTML Imports as a loading mechanism.
> 
> As with Polymer 1.x, you should ensure that you're loading the polyfills. Typically your entrypoint will include one of the following scripts:
> 
> |                         |                                                                                                |
> | ----------------------- | ---------------------------------------------------------------------------------------------- |
> | webcomponents-lite.js   | A single file containing all of the webcomponents related polyfills.                           |
> | webcomponents-loader.js | A small script that performs client-side feature detection, then loads the required polyfills. |
> 
> [[source](https://www.polymer-project.org/blog/2018-10-02-webcomponents-v0-deprecations)]

### Possibly no fix needed?

    - webcomponentsjs 1.2.7 release appears to already incorporate Web Components v1 with HTML Imports (https://github.com/webcomponents/webcomponentsjs/blob/aca216f6c7870f3ac9777bde7ebb9bed692b46c5/entrypoints/webcomponents-sd-ce-pf-index.js)
    - Polymer 1.4 requires webcomponentsjs ^0.7.20 (https://github.com/Polymer/polymer/blob/v1.4.0/bower.json) and Polymer 1.10.1 requires webcomponentsjs ^0.7.24 (https://github.com/Polymer/polymer/blob/v1.4.0/bower.json), but we're using webcomponentsjs 1.2.7. It seems that this already includes a solve for our issue?

### Custom-Elements v0 VS v1


> v1 replaces v0 which was an experimental try.
> 
> v0 was a [Google-only proposed specification](https://www.w3.org/TR/2016/WD-custom-elements-20160226/)
 while v1 is a WHATWG Web Standard [adopted by all major browser vendors](https://developers.google.com/web/fundamentals/getting-started/primers/customelements#historysupport) (though not implemented yet).
> 
> More details on some Internet publications:
> 
> - [All about HTML Custom Elements](https://github.com/shawnbot/custom-elements) (v0 and v1).
> - [What's New in Custom Elements](https://docs.google.com/presentation/d/179IRXRFmDGb3P60OVsoAIsElcaOp__5EuIWLcL8oNos/) (from one of the author[s]).
> 
> If you're new at Custom Elements, [forget v0](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/).
> 
> [[source](https://stackoverflow.com/questions/40323180/what-are-the-differences-between-custom-elements-v0-and-v1#40324051)]