import { HttpClient, HttpMethod } from "@/infra/httpClient.type";
import { IcreateLaboratory, ILaboratory } from "@/models/laboratory.model";

export class LaboratoryService {
    constructor(private readonly httpClient: HttpClient) { }

    private URL = "/laboratory"

    async getAllLaboratory(): Promise<ILaboratory[]> {
        try {
            return await this.httpClient.request<Promise<ILaboratory[]>>({
                method: HttpMethod.GET,
                endpoint: this.URL + "/read"
            })
        } catch (error) {
            throw error
        }
    }

    async createLaboratory(params: IcreateLaboratory) {
        try {
            await this.httpClient.request({
                method: HttpMethod.POST,
                endpoint: this.URL + "/create",
                body: params
            })
        } catch (error) {
            throw error
        }
    }

}