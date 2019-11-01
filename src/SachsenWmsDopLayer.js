import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import {getWidth} from 'ol/extent.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';

export default class SachsenWmsDopLayer extends TileLayer {

    constructor() {
        // let startResolution = getWidth([278000.0, 5560000.0, 506000.0, 5730000.0]) / 512;
        // let resolutions = new Array(22);
        // for (var i = 0, ii = resolutions.length; i < ii; ++i) {
        //   resolutions[i] = startResolution / Math.pow(2, i);
        // }
        // let tileGrid = new TileGrid({
        //   extent: [278000.0, 5560000.0, 506000.0, 5730000.0],
        //   resolutions: resolutions,
        //   tileSize: [512, 512]
        // });

        const src = new TileWMS({
            url: "https://geodienste.sachsen.de/wms_geosn_dop-rgb/guest", //http://localhost:5000/custom
            params: {
                LAYERS: "sn_dop_020",
                // 'TILED': true 
            },
            projection: 'EPSG:25833',
            // tileGrid: tileGrid                
        });

        super({ source: src, visible: true });
        this.set("title", "SachenDop");
        this.set("type", "base");
        this.set("name", "SNDOP");
    }
}