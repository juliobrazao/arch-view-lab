import { HttpFetchAdapter } from "@/infra/httpClient";
import { LaboratoryService } from "@/services/laboratory.service";
import { useModelLaboratory } from "./laboratory.model";
import { LaboratoryView } from "./laboratory.view";

export function laboratoryPage() {
    const httpCllient = new HttpFetchAdapter();
    const laboratoryService = new LaboratoryService(httpCllient);
    const methods = useModelLaboratory(laboratoryService);
    return <LaboratoryView {...methods} />;
}