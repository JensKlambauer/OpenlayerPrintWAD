// import TileLayer from 'ol/layer/Tile';
// import TileWMS from 'ol/source/TileWMS';
import ImageLayer from 'ol/layer/Image';
import ImageWMS from 'ol/source/ImageWMS';
// import {getWidth} from 'ol/extent.js';
// import TileGrid from 'ol/tilegrid/TileGrid.js';

export default class WadWmsLayer extends ImageLayer {

    constructor() {
        // let startResolution = getWidth([315000.0, 5607000.0, 352000.0, 5648000.0]) / 512;
        // let resolutions = new Array(22);
        // for (var i = 0, ii = resolutions.length; i < ii; ++i) {
        //   resolutions[i] = startResolution / Math.pow(2, i);
        // }
        // let tileGrid = new TileGrid({
        //   extent: [315000.0, 5607000.0, 352000.0, 5648000.0],
        //   resolutions: resolutions,
        //   tileSize: [512, 512]
        // });

        const src = new ImageWMS({
            url: "https://geodatendienste.de/wad/?",   //"http://192.168.0.247:8085/wad/qgis_mapserv.fcgi.exe",  http://5.175.25.253/wad/? 
            params: {
                LAYERS: ['SESSION.Topographie\\Topographie', 'SESSION.Kanal\\Kanal'],    //SESSION.Kanal\\Topografie ,['WAD']
                TRANSPARENT: true   
            },
            // tileGrid: tileGrid
            projection: 'EPSG:25833',          
        });

        super({ source: src, visible: true });
        this.set("title", "WAD Kanal");
        this.set("name", "WAD");
        // this.setOpacity(0.5);
        this.set("type", "base");
    }
}