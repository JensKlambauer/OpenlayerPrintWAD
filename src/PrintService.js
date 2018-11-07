import WebApiAuthRepository from './WebApiAuthRepository';
import PrintRepository from './PrintRepository';

export default class PrintService {
    constructor() {
        this.webApiTokenUrl = process.env.API_TOKEN_URL;
    }

    async getApiAccessToken() {
        this.connection = new WebApiAuthRepository(this.webApiTokenUrl);
        const token = await this.connection.getAccessToken();
        if (token) {
            this.token = token['access_token'];
        } else {
            this.token = null;
            throw "Fehler - Token nicht vorhanden";
        }
    }

    async getTemplates() {
        const printConfig = new PrintRepository(this.token);
        return await printConfig.listTemplates();
    }

    async getScales() {
        const printConfig = new PrintRepository(this.token);
        return await printConfig.listMapScales();
    }

    async postPrintData(data) {       
        const printConfig = new PrintRepository(this.token);
        await printConfig.postPrintData(data);
    }

    async getFeatures(idProj) {
        const printConfig = new PrintRepository(this.token);
        return await printConfig.getFeatures(idProj);
    }
} 