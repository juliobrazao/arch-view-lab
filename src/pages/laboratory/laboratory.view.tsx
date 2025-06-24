import { useModelLaboratory } from "./laboratory.model"
import { Button, Table } from "antd"

type propsView = ReturnType<typeof useModelLaboratory>

export function LaboratoryView(props: propsView) {

    const {
        data,
        refetch,
        status
    } = props.propsQueryAllLaboratory

    return (
        <div>
            <div className="flex justify-end">
                <Button onClick={() => refetch()} >Refresh</Button>
            </div>
            <div className="shadow-md p-3 mt-2">
                <Table
                    rowKey={"_id"}
                    loading={status == "pending" ? true : false}
                    dataSource={data}
                    columns={props.columns}
                />
            </div>
        </div>
    )
}