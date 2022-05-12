"use strict";
exports.__esModule = true;
exports.prisma_i = void 0;
var itty_router_1 = require("itty-router");
var router = (0, itty_router_1.Router)();
var client_1 = require("@prisma/client");
exports.prisma_i = new client_1.PrismaClient();
/* -----routes import----- */
var crud_route_1 = require("./routes/crud_route");
(0, crud_route_1.crud_route)(router);
router.all("*", function () { return new Response("404, not found!", { status: 404 }); });
addEventListener('fetch', function (event) {
    event.respondWith(router.handle(event.request));
});
