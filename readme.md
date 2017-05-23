# isDark.js

**isDark.js** is the smallest code to know if any color is dark or light. 538 bytes gzipped // 727 bytes minified. No dependency and crossbrowser (IE9+). Will be adapted for Node.JS.

**isDark.js** supports every color :

* `HSL()` and `HSLA()`
* `RGB()` and `RGBA()` (including with percentage values)
* Hexadecimal (`#RGB`, `#RGBA`, `#RRGGBB` and `#RRGGBBAA`)
* Every keyname, including `rebeccapurple` and `transparent` (return both `true`)

**isDark.js**, however, don't detect illegal and deprecated values. It doesn't support `currentColor`.

### Security

Security issues has been solved. Even if the code uses `eval`, it is safe.

### How to use

Just call `window.isDark("black") // true`.

### Examples

```
isDark("black");
isDark("white");
isDark("salmon");
isDark("rgb(200 24 37)");
isDark("rgba(200, 24, 37)");
isDark("rgb(0% 0% 0%)");
isDark("hsl(0 50% 100%)");
isDark("hsla(0, 50%, 100%, 1)");
isDark("#FFF");
isDark("FFF");
isDark("#FF0000");
isDark("FF000000");
```
### isLight()

```
function isLight(color){
    return !isDark(color);
}
```

### License

This code is under MIT License.

### Ressources

About colors and brightness :
* [Calculating the Perceived Brightness of a Color](http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx) (NbdTech)
* [Techniques For Accessibility Evaluation And Repair Tools](https://www.w3.org/TR/AERT#color-contrast) (W3C)
* [CSS4 Color Module Level 4](https://www.w3.org/TR/css-color-4/) (W3C)

About conversion (all conversion functions were modified) :

* [Converting HSL to RGB](https://gist.github.com/mjackson/5311256)
* [One-liner Hex to RGB](http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#comment32619955_11508164)
* [Short Hex to long hex](https://gist.github.com/jed/983661)
