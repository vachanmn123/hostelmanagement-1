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
            <Link href={"/block/1/floor/1"}>
              {" "}
              <Button className="w-full my-2">Floor 1</Button>
            </Link>
            <Link href={"/block/1/floor/2"}>
              {" "}
              <Button className="w-full my-2">Floor 2</Button>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Block 2</AccordionTrigger>
          <AccordionContent>
            <Link href={"/block/2/floor/1"}>
              {" "}
              <Button className="w-full my-2">Floor 1</Button>
            </Link>
            <Link href={"/block/2/floor/2"}>
              {" "}
              <Button className="w-full my-2">Floor 2</Button>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
