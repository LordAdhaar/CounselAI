"use client";
import { ChevronLeft, Loader2, XCircle } from "lucide-react";
import ChatInput from "./chat-input";
import Messages from "./messages";
import { trpc } from "@/app/_trpc/client";
import Link from "next/link";
import { buttonVariants } from "../button";

interface ChatWrapperProps {
    fileId: string;
}

export default function ChatWrapper({fileId}:ChatWrapperProps){

    const {data, isLoading} = trpc.getFileUploadStatus.useQuery({
        fileId
    },{
        retry: true,
        retryDelay: 500
    })


    if(isLoading){
        return(
            <div className="relative min-h-full bg-zinc-50 flex divide-zinc-200 flex-col justify-between gap-2">
                <div className="flex-1 flex justify-center items-center flex-col mb-28">
                    <div className="flex flex-col items-center gap-2">
                        <Loader2 className="h-8 w-8 text-blue-500 animate-spin"/>
                        <h3 className="font-semibold text-xl">Loading....</h3>
                    </div>
                </div>
            </div>
        )
    }

    if(data?.status === "PROCESSING"){
        return(
            <div className="relative min-h-full bg-zinc-50 flex divide-zinc-200 flex-col justify-between gap-2">
                <div className="flex-1 flex justify-center items-center flex-col mb-28">
                    <div className="flex flex-col items-center gap-2">
                        <Loader2 className="h-8 w-8 text-blue-500 animate-spin"/>
                        <h3 className="font-semibold text-xl">Processing....</h3>
                    </div>
                </div>
            </div>
        )
    }

    if(data?.status === "FAILED"){
        return(
            <div className="relative min-h-full bg-zinc-50 flex divide-zinc-200 flex-col justify-between gap-2">
                <div className="flex-1 flex justify-center items-center flex-col mb-28">
                    <div className="flex flex-col items-center gap-2">
                        <XCircle className="h-8 w-8 text-red-500 "/>
                        <p className="text-zinc-500 text-sm">
                            Your free plan supports upto 5 pages per PDF
                        </p>
                        <Link href="/dashboard" className={buttonVariants({
                            variant:"secondary",
                            className:"mt-4"
                        
                        })}><ChevronLeft className="h-3 w-3 mr-1.5"/>Back</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
            <div className="flex-1 justify-between flex flex-col mb-20">
                <Messages />
            </div>

            <ChatInput />
        </div>
    )
}