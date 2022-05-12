import { Router } from 'itty-router'
const router = Router()

import { PrismaClient } from '@prisma/client'
export const prisma_i = new PrismaClient()


/* -----routes import----- */
import { crud_route } from './routes/crud_route'


crud_route(router)


router.all("*", () => new Response("404, not found!", { status: 404 }))

addEventListener('fetch', (event: any) => {
  event.respondWith(router.handle(event.request))
})
