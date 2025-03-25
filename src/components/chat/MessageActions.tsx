"use client";

import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Imessage, useMessage } from "@/lib/store/messages";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function DeleteAlert() {
  const actionMessage = useMessage((state) => state.actionMessage);
  const optimisticDeleteMessage = useMessage(
    (state) => state.optimisticDeleteMessage
  );

  const handleDeleteMessage = async () => {
    const supabase = supabaseBrowser();
    optimisticDeleteMessage(actionMessage?.id!);
    const { data, error } = await supabase
      .from("messages")
      .delete()
      .eq("id", actionMessage?.id!);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully delete a message");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button id="trigger-delete"></button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
          <AlertDialogDescription>
            La suppression sera définitive.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteMessage} className="hover:bg-blue-700">
            Valider
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function EditAlert() {
  const actionMessage = useMessage((state) => state.actionMessage);
  const optimisticUpdateMessage = useMessage(
    (state) => state.optimisticUpdateMessage
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = async () => {
    const supabase = supabaseBrowser();
    const text = inputRef.current?.value.trim();
    if (text) {
      optimisticUpdateMessage({
        ...actionMessage,
        text,
        is_edit: true,
      } as Imessage);

      const { error } = await supabase
        .from("messages")
        .update({ text, is_edit: true })
        .eq("id", actionMessage?.id!);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Update Successful");
      }
      document.getElementById("trigger-edit")?.click();
    } else {
      document.getElementById("trigger-edit")?.click();
      document.getElementById("trigger-delete")?.click();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button id="trigger-edit"></button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Modifier le message</DialogTitle>
        </DialogHeader>
        <Input defaultValue={actionMessage?.text} ref={inputRef} />
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleEdit}
            className="hover:bg-blue-700"
          >
            Valider
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
