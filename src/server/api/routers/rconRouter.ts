import { server } from "~/server/rcon";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";
import { env } from "~/env.mjs";

const connect = async () => {
  if (!server.isConnected) {
    let connected = await server.authenticate(env.RCON_PASSWORD)
    return connected
  }
  return server.isConnected
}

export const rconRouter = createTRPCRouter({
  map: protectedProcedure
    .input(z.object({ map: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await connect();
      server.execute(`map ${input.map}`)
    }),
  connect: protectedProcedure.mutation(async ({ ctx }) => {
    await connect();
  }),
  status: publicProcedure.query(async ({ ctx }) => {
    await connect();
    return await server.execute("status");
  })
});
