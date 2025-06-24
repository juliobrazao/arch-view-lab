import { HttpClient, HttpMethod } from "@/infra/httpClient.type";
import { ILaboratory } from "@/models/laboratory.model";


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
}