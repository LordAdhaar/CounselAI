import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";

export default async function Dashboard(){
    
    try {

        const {getUser} =  getKindeServerSession();
        const user = await getUser();
        console.log(user?.email)
        
        if (!user || !user.id) redirect("/auth-callback?origin=dashboard")

        

        return (
            <div>
                { user && <span>{user.email}</span>}
            </div>
        )

    } catch (error: any) {
        console.log(error)
    }

}