import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const movieRouter = createTRPCRouter({

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.movie.findMany();
  }),
  
  creatOne: publicProcedure
  .input(z.object({ title: z.string() }))
  .mutation(({ ctx, input}) => {
    return ctx.prisma.movie.create({data: input});
  }),

  deleteOne: publicProcedure
  .input(z.object({ id: z.string() }))
  .mutation(({ ctx, input}) => {
    return ctx.prisma.movie.delete({where: {id: input.id}});
  }),
});
