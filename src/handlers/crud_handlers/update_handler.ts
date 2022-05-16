import { prisma_i } from "../../index"

export const update_handler = async (req: Request): Promise<Response> => {
    try {
        const {id, name, email,password}: any = await req.json();
        const data_p = await prisma_i.credentials_manager.update({
            where:{
                id: Number(id)
            },
            data: {
                name,
                email,
                password,
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