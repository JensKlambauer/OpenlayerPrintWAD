import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
// import {getWidth} from 'ol/extent.js';
// import TileGrid from 'ol/tilegrid/TileGrid.js';

export default class WadWmsLayer extends TileLayer {

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

        const src = new TileWMS({
            url: "https://geodatendienste.de/wad/?",   //"http://192.168.0.247:8085/wad/qgis_mapserv.fcgi.exe",  http://5.175.25.253/wad/? 
            params: {
                LAYERS: ['SESSION.Kanal\\Topografie', 'SESSION.Kanal\\Kanal'],    //,['WAD']
                TRANSPARENT: true   
            },
            // tileGrid: tileGrid          
        });

        super({ source: src, visible: false });
        this.set("title", "WAD Kanal");
        this.set("name", "WAD");
        // this.setOpacity(0.5);
        this.set("type", "base");
    }
}