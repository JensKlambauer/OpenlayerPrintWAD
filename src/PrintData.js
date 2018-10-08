export default class PrintData {
    constructor(id_projekt) {
        this.id_projekt = id_projekt;
    }

    get get_idProjekt() {
        return this.id_projekt;
    }

    get get_template() {
        return this.template;
    }

    get get_scale() {
        return this.scale;
    }

    get get_epsgCode() {
        return this.epsg;
    }

    set set_extents(extents) {
        this.extents = null;
        this.extents = extents;
    }

    set set_template(template) {
        this.template = template;
    }

    set set_scale(scale) {
        this.scale = scale;
    }

    set set_epsgCode(epsg_code) {
        this.epsg = epsg_code;
    }

    toJSON() {
        return {
            extents: this.extents,
            id_projekt: this.id_projekt,
            template: this.template,
            scale: this.scale,
            epsg_code: this.epsg
        }
    }
}