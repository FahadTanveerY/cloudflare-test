import { prisma_i } from "../../index"

export const read_handler = async (req: Request): Promise<Response> => {

    try{
        const data_p = await prisma_i.$queryRaw`select * from whydonate_employees`
        return new Response(
        JSON.stringify({
            method: req.method,
            operation: 'read user',
            time: new Date(),
            data: data_p
        }), {
        headers: { 'content-type': 'application/json' }
    })
    }catch(err){
        return new Response(
        JSON.stringify({
            method: req.method,
            operation: 'read user',
            time: new Date(),
            error: err
        }), {
        headers: { 'content-type': 'application/json' }
    })
    }
}
