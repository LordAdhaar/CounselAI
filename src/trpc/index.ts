import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
 
export const appRouter = router({
  authCallback: publicProcedure.query(async ()=>{
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user || !user.email || !user.id) 
      throw new TRPCError({code:"UNAUTHORIZED"})

      // check if user in db or else create the user
    
    return {success : true}
  })
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;