# sparkline

Generate SVG sparklines.

## Usage

```html
<!-- width, height and stroke-width attributes must be defined on the target SVG -->
<svg width="100" height="30" stroke-width="3"></svg>

<script>
  // the function signature is sparkline(targetSVG, values).
  sparkline(document.querySelector("svg"), [1, 5, 2, 4, 8, 3, 7]);
</script>
```

To set the sparkline color, you have to set the stroke and fill colors.

```css
/* just the line */
svg {
  stroke: red;
  fill: none;
}

/* line with highlight area */
svg {
  stroke: red;
  fill: rgba(255, 0, 0, .3);
}
```

You can [see this library in action](https://codepen.io/fnando/full/KyZLLV/).

![](https://github.com/fnando/sparkline/blob/master/sparkline.gif?raw=true)

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
