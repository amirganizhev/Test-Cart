Leaflet.MeasureControl
======================

Leaflet control to mesure distances on the map.

Requires [Leaflet.Draw](https://github.com/leaflet/Leaflet.Draw#readme)

Check out the [demo](http://makinacorpus.github.io/Leaflet.MeasureControl/)

Install
-------

```shell
npm install leaflet.measurecontrol
```

Usage
-----

As map option:

```js
var map = L.map('map', { measureControl:true });
```

Or like any control:

```js
L.Control.measureControl().addTo(map);
```

Development
-----------

```shell
npm install      # install dependencies
npm run release  # minify js and copy sources in docs (example)
```

Changelog
---------

See [CHANGELOG.md](./CHANGELOG.md).


