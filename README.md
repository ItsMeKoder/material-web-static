# Material Web Bundler
## Introduction
This is a bundler for [Material Web](https://github.com/material-components/material-web)(and [Material Web Additions](https://github.com/maicol07/material-web-additions)) components. It bundles the components into static files, which can be used in a browser.

# Dont use minify, it'll try to redefine the same custom element, which will cause an error.
## Usage
### Per component
```html
<script src="https://m3.stiblook.rocks/bundled/{component}.js"></script>
```
### All Material Web Components
```html
<script> src="https://m3.stiblook.rocks/bundled/material.js"></script>
```
### All Material Web Additions Components
```html
<script> src="https://m3.stiblook.rocks/bundled/material-additions.js"></script>
```
> The variants of components are bundled to the same file.
> For example, `md-filled-button`, `md-outlined-button` are bundled to `button.js`.
## Components List
| Component | Bundled File | Minified File |
| --- | --- | --- |
| badge | [badge.js](https://m3.stiblook.rocks/bundled/badge.js) | [badge.min.js](https://m3.stiblook.rocks/bundled/badge.min.js) |
| button | [button.js](https://m3.stiblook.rocks/bundled/button.js) | [button.min.js](https://m3.stiblook.rocks/bundled/button.min.js) |
| card | [card.js](https://m3.stiblook.rocks/bundled/card.js) | [card.min.js](https://m3.stiblook.rocks/bundled/card.min.js) |
| checkbox | [checkbox.js](https://m3.stiblook.rocks/bundled/checkbox.js) | [checkbox.min.js](https://m3.stiblook.rocks/bundled/checkbox.min.js) |
| chips | [chips.js](https://m3.stiblook.rocks/bundled/chips.js) | [chips.min.js](https://m3.stiblook.rocks/bundled/chips.min.js) |
| circularprogress | [circularprogress.js](https://m3.stiblook.rocks/bundled/circularprogress.js) | [circularprogress.min.js](https://m3.stiblook.rocks/bundled/circularprogress.min.js) |
| data-table | [data-table.js](https://m3.stiblook.rocks/bundled/data-table.js) | [data-table.min.js](https://m3.stiblook.rocks/bundled/data-table.min.js) |
| dialog | [dialog.js](https://m3.stiblook.rocks/bundled/dialog.js) | [dialog.min.js](https://m3.stiblook.rocks/bundled/dialog.min.js) |
| divider | [divider.js](https://m3.stiblook.rocks/bundled/divider.js) | [divider.min.js](https://m3.stiblook.rocks/bundled/divider.min.js) |
| elevation | [elevation.js](https://m3.stiblook.rocks/bundled/elevation.js) | [elevation.min.js](https://m3.stiblook.rocks/bundled/elevation.min.js) |
| fab | [fab.js](https://m3.stiblook.rocks/bundled/fab.js) | [fab.min.js](https://m3.stiblook.rocks/bundled/fab.min.js) |
| field | [field.js](https://m3.stiblook.rocks/bundled/field.js) | [field.min.js](https://m3.stiblook.rocks/bundled/field.min.js) |
| focus | [focus.js](https://m3.stiblook.rocks/bundled/focus.js) | [focus.min.js](https://m3.stiblook.rocks/bundled/focus.min.js) |
| icon | [icon.js](https://m3.stiblook.rocks/bundled/icon.js) | [icon.min.js](https://m3.stiblook.rocks/bundled/icon.min.js) |
| iconbutton | [iconbutton.js](https://m3.stiblook.rocks/bundled/iconbutton.js) | [iconbutton.min.js](https://m3.stiblook.rocks/bundled/iconbutton.min.js) |
| layout-grid | [layout-grid.js](https://m3.stiblook.rocks/bundled/layout-grid.js) | [layout-grid.min.js](https://m3.stiblook.rocks/bundled/layout-grid.min.js) |
| linearprogress | [linearprogress.js](https://m3.stiblook.rocks/bundled/linearprogress.js) | [linearprogress.min.js](https://m3.stiblook.rocks/bundled/linearprogress.min.js) |
| list | [list.js](https://m3.stiblook.rocks/bundled/list.js) | [list.min.js](https://m3.stiblook.rocks/bundled/list.min.js) |
| menu | [menu.js](https://m3.stiblook.rocks/bundled/menu.js) | [menu.min.js](https://m3.stiblook.rocks/bundled/menu.min.js) |
| navigationbar | [navigationbar.js](https://m3.stiblook.rocks/bundled/navigationbar.js) | [navigationbar.min.js](https://m3.stiblook.rocks/bundled/navigationbar.min.js) |
| navigationdrawer | [navigationdrawer.js](https://m3.stiblook.rocks/bundled/navigationdrawer.js) | [navigationdrawer.min.js](https://m3.stiblook.rocks/bundled/navigationdrawer.min.js) |
| navigationtab | [navigationtab.js](https://m3.stiblook.rocks/bundled/navigationtab.js) | [navigationtab.min.js](https://m3.stiblook.rocks/bundled/navigationtab.min.js) |
| radio | [radio.js](https://m3.stiblook.rocks/bundled/radio.js) | [radio.min.js](https://m3.stiblook.rocks/bundled/radio.min.js) |
| ripple | [ripple.js](https://m3.stiblook.rocks/bundled/ripple.js) | [ripple.min.js](https://m3.stiblook.rocks/bundled/ripple.min.js) |
| segmentedbutton | [segmentedbutton.js](https://m3.stiblook.rocks/bundled/segmentedbutton.js) | [segmentedbutton.min.js](https://m3.stiblook.rocks/bundled/segmentedbutton.min.js) |
| segmentedbuttonset | [segmentedbuttonset.js](https://m3.stiblook.rocks/bundled/segmentedbuttonset.js) | [segmentedbuttonset.min.js](https://m3.stiblook.rocks/bundled/segmentedbuttonset.min.js) |
| select | [select.js](https://m3.stiblook.rocks/bundled/select.js) | [select.min.js](https://m3.stiblook.rocks/bundled/select.min.js) |
| slider | [slider.js](https://m3.stiblook.rocks/bundled/slider.js) | [slider.min.js](https://m3.stiblook.rocks/bundled/slider.min.js) |
| switch | [switch.js](https://m3.stiblook.rocks/bundled/switch.js) | [switch.min.js](https://m3.stiblook.rocks/bundled/switch.min.js) |
| tabs | [tabs.js](https://m3.stiblook.rocks/bundled/tabs.js) | [tabs.min.js](https://m3.stiblook.rocks/bundled/tabs.min.js) |
| textfield | [textfield.js](https://m3.stiblook.rocks/bundled/textfield.js) | [textfield.min.js](https://m3.stiblook.rocks/bundled/textfield.min.js) |