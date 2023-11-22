const buttons = [
    {
        name: "React"
    },
    {
        name: "Next.js"
    },
    {
        name: "Typescript"
    },
    {
        name: "Nest.js"
    },
    {
        name: "PostgreSQL"
    },
    {
        name: "Tailwindcss"
    },
    {
        name: "Figma"
    },
    {
        name: "Cypress"
    },
    {
        name: "Storybook"
    },
    {
        name: "Git"
    },
]
export default function Skillicons() {
    return(
        <>
        {buttons.map((el) => {
        return (
            <div>
                
                <button className="btngray">
                    <p className="p-20">{el.name}</p>
                </button>
            </div>
        );
      })}
        </>
    )
}