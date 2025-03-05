import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import textos from "@/lib/textos"

export default function Acordion(){
  const print=textos.gestionintegrada.principiosT
  const printextos=textos.gestionintegrada.principios
    return(
        <div>
            <Accordion type="single" collapsible>
              {print.map((text,id)=>{
                return(
                  <AccordionItem value={`item-${id}`}>
                    <AccordionTrigger>{text}</AccordionTrigger>
                    <AccordionContent>
                      {printextos[id]}
                    </AccordionContent>
                    </AccordionItem>
                )
              })}
            </Accordion>
        </div>
)
}