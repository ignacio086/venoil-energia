import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import textos from "@/lib/textos"
import { useLanguage } from "../context/LanguageContext";

export default function Acordion(){
  const { language } = useLanguage();
  const print=textos[language].gestionintegrada.principiosT
  const printextos=textos[language].gestionintegrada.principios
    return(
        <div className="text-white">
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