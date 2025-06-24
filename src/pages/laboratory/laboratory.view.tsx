import { useModelLaboratory } from "./laboratory.model"

type propsView = ReturnType<typeof useModelLaboratory>

export function LaboratoryView(props: propsView) {
    return (
        <>
            laboratory
        </>
    )
}