import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SelectCategory } from "../components/SelectCategory";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";

export default function SellRoute(){
    return(
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
            <Card>
                <form>
                    <CardHeader>
                        <CardTitle>Sell Your Product with ease</CardTitle>
                        <CardDescription>
                            Please describe your product here in details so that it can be sold
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-2">
                            <label>Name</label>
                            <Input type="text" placeholder="Name of your Product"/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label>Category</label>
                            <SelectCategory />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label>Price</Label>
                            <Input placeholder="30$" type="number"></Input>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label>Small Summary</Label>
                            <Textarea placeholder="Please decribe your product here..."/>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <Label>Description</Label>
                            <TipTapEditor />
                        </div>
                    </CardContent>
                </form>
            </Card>
        </section>
    )
}