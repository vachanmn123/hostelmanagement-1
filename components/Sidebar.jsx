import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <div className="py-5 px-5">
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1" className="border-bottom border-white ">
          <AccordionTrigger>Block 1</AccordionTrigger>
          <AccordionContent>
            <Button className="w-full my-2">Floor 1</Button>
            <Button className="w-full my-2">Floor 2</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Block 2</AccordionTrigger>
          <AccordionContent>
            <Button className="w-full my-2">Floor 1</Button>
            <Button className="w-full my-2">Floor 2</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
