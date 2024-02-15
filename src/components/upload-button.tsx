"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "./ui/button";
import Dropzone from "react-dropzone";
import UploadDropzone from "./upload-dropzone";
  

export default function UploadButton(){
    
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return(

        <Dialog 
            open={isOpen} 
            onOpenChange={(v) => {
                if(!v){
                    setIsOpen(v)
                }
        }}>
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
                <Button variant="default"> Upload PDF</Button>
            </DialogTrigger>
            <DialogContent>
                <UploadDropzone />
            </DialogContent>

        </Dialog>

    )
}