const checkbox = [
    {
        text: 'All'
    },
    {
        text: 'Income'
    },
    {
        text: 'Expense'
    },
]

export default function Types() {
    return(
        checkbox.map((props) => {
            return(
                <div className="flex gap-[10px]">
                    <input type="checkbox" className="checkbox" />
                    <p>{props.text}</p>
                </div>
            )
        })
    )
}