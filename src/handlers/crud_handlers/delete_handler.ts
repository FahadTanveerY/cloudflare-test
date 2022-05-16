import { prisma_i } from "../../index"

export const delete_handler = async (req: Request): Promise<Response> => {

    try {
        const {id}: any = await req.json();
        const data_p = await prisma_i.whydonate_employees.delete({
            where:{
                id: Number(id)
            }
        })
        return new Response(
            JSON.stringify({
                data: data_p
            }), {
            headers: { 'content-type': 'application/json' }
        })
    } catch (err) {
        return new Response(
            JSON.stringify({
                error: err
            }), {
            headers: { 'content-type': 'application/json' }
        })
    }
}