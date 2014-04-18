#jquery.cyr-loadingOverlay
A minimal jQuery plugin to add a loading overlay on a div


---

##Installation

Include ```jquery.cyr-loadingOverlay.js``` after jQuery:

```html
<script src="/path/to/jquery.cyr-loadingOverlay.js"></script>
```



##Start the loading overlay

```javascript
$('#my-bloc').loadingStart({
  overlay_color: "#FFFFFF",
  loading_img: '/path/to/loading.gif',
  overlay_opacity: 0.8
});
```

##Stop the loading overlay



```javascript
$('#my-bloc').loadingStop();
```

##Options

overlay_color : define the color of the overlay in hex (#xxxxxx)

overlay_opacity : define the opacity of the overlay (between 0 and 1, 0is invisible and 1 is 100% opacity)

loading_img : path to the image that is displayed on the loading overlay (like spinner for example)

