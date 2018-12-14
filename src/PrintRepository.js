import { GetRequest, GetRequestFetch, PostRequestFetch } from "./AjaxRequest";

export default class PrintRepository {
    constructor(token) {
        this.token = token;
    }

    async listTemplates() {
        const apiUrl = process.env.API_PRINT_URL + `/ComposerTemplates`;        
        return await GetRequest(apiUrl, this.token);
    }

    async listMapScales() {
        const apiUrl = process.env.API_PRINT_URL + `/GetScales`;        
        return await GetRequest(apiUrl, this.token);
    }    

    async postPrintData(data) {
        let json = JSON.stringify(data);
        await PostRequestFetch(process.env.API_PRINTMAP_URL + '/PrintMap', json);
    }

    async getFeatures(idProj) {
        const apiUrl = process.env.API_PRINT_URL + `/Features/` + idProj;        
        return await GetRequestFetch(apiUrl, this.token);
    }  
}