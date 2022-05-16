import { prisma_i } from "../../index"

export const create_handler = async (req: Request): Promise<Response> => {
    try{
        const body: any = await req.json();
        const data_p = await prisma_i.whydonate_employees.create({
            data: body
        })
        return new Response(
        JSON.stringify({
            data: data_p
        }), {
        headers: { 'content-type': 'application/json' }
    })
    }catch(err){
        return new Response(
        JSON.stringify({
            error: err
        }), {
        headers: { 'content-type': 'application/json' }
    })
    }
}