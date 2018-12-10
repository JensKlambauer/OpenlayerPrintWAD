import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';

export default class WadWmsLayer extends TileLayer {

    constructor() {
        const src = new TileWMS({
            url: "https://geodatendienste.de/wad/?",   //"http://192.168.0.247:8085/wad/qgis_mapserv.fcgi.exe",  http://5.175.25.253/wad/? 
            params: {
                LAYERS: ['SESSION.Kanal\\Topografie', 'SESSION.Kanal\\Kanal'],    //,['WAD']
                TRANSPARENT: true   
            },
            projection: 'EPSG:25833',          
            transition: 0                 
        });

        super({ source: src, visible: true });
        this.set("title", "WAD Kanal");
        this.set("name", "WAD");
        // this.setOpacity(0.5);
        this.set("type", "base");
    }
}