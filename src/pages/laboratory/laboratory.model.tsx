import { ILaboratory } from "@/models/laboratory.model";
import { LaboratoryService } from "@/services/laboratory.service";
import { useQuery } from "@tanstack/react-query";
import type { TableProps } from 'antd';

export function useModelLaboratory(laboratoryService: LaboratoryService) {

    const {
        ...propsQueryAllLaboratory
    } = useQuery({
        queryKey: ["fetchAllLaboratory"],
        queryFn: () => laboratoryService.getAllLaboratory()
    })

    const columns: TableProps<ILaboratory>['columns'] = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
            width: "20%",
            align: "center"
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: "center"
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            align: "center"
        },
    ];

    return {
        propsQueryAllLaboratory,
        columns
    }
}