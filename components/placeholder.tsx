import { MessageSquareExclamationPoint } from 'lucide-react'
import React from 'react'
import { ReactElement } from "react";


type placeholderProps = {
    label: string,
    icon?: ReactElement<{ className?: string }>;
    button?: ReactElement<{ className?: string }>;
}

const Placeholder = ({label, icon = <MessageSquareExclamationPoint />, button=<div />}: placeholderProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4">
        {React.cloneElement(icon, { className: "w-12 h-12 text-muted-foreground" })}
        <h2 className="text-center text-md">{label}</h2>
        {button && React.cloneElement(button, { className: "h-10" })}
    </div>
  )
}

export  {Placeholder}