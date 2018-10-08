import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

export default class WadWmsLayer extends TileLayer {

    constructor() {
        const src = new TileWMS({
            url: "http://5.175.25.253/wad/?",
            params: {
                LAYERS: ['SESSION.Kanal\\Topografie', 'SESSION.Kanal\\Kanal']   
            },
            projection: 'EPSG:25833'                   
        });

        super({ source: src, visible: false });
        this.set("title", "WAD Kanal");
        this.set("type", "base");
    }
}