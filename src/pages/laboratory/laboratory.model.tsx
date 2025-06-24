import { LaboratoryService } from "@/services/laboratory.service";
import { useQuery } from "@tanstack/react-query";

export function useModelLaboratory(laboratoryService: LaboratoryService) {

    const {
        ...propsQueryAllLaboratory
    } = useQuery({
        queryKey: ["fetchAllLaboratory"],
        queryFn: () => laboratoryService.getAllLaboratory()
    })

    return {
        ...propsQueryAllLaboratory
    }
}