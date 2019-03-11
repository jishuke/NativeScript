import { EventData, Page } from "tns-core-modules/ui/page/page";
import { Label } from "tns-core-modules/ui/label/label";

const setLabelTextAndLog = (args, text: string) => {
    const page = <Page>args.object.page;
    const label = <Label>page.getViewById("resultLabel");
    label.set("text", text);
    console.log("on button tap");
}

export function onTap(args: EventData) {
    setLabelTextAndLog(args, "on button tap");
}

export function clearResult(args: EventData) {
    setLabelTextAndLog(args, "");
}

export function onOuterWrapLayoutTap(args) {
    setLabelTextAndLog(args, "on outer wrap layout tap");
}

export function onStackLayoutThrowTap(args: EventData) {
    setLabelTextAndLog(args, "Should not tap layout with IsPassThroughParentEnabled=true");
    // throw new Error("Should not tap layout with IsPassThroughParentEnabled=true");
}

export function onUserInteractionDisabledTap(args: EventData) {
    setLabelTextAndLog(args, "Should not tap button with IsUserInteractionEnabled=false");
    // throw new Error("Should not tap button with IsUserInteractionEnabled=false");
}

export function onDisabledThrowTap(args: EventData) {
    setLabelTextAndLog(args, "Should not tap button with IsEnabled=false");
    // throw new Error("Should not tap button with IsEnabled=false");
}