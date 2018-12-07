import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

export default class SachsenWmsDopLayer extends TileLayer {

    constructor() {
        const src = new TileWMS({
            url: "https://geodienste.sachsen.de/wms_geosn_dop-rgb/guest", 
            params: {
                LAYERS: "sn_dop_020"   
            },
            projection: 'EPSG:25833'                   
        });

        super({ source: src, visible: true });
        this.set("title", "SachenDop");
        this.set("type", "base");
        this.set("name", "SNDOP");
    }
}