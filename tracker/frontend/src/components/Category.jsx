import Eye from "@/icon/Eye";
import Arrow from "@/icon/ArrowDropDown";

const RecCat = [
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
    {
        text: "Food & Drinks",
    },
]

export default function RecCategory() {
    return(
        RecCat.map((props) => {
            return(
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                    <Eye/>
                    <p>{props.text}</p>
                </div>
                <p><Arrow/></p>
            </div>
            )
        })
    )
}