export default function Task({ title = "Task Title" }: { title: string }) {

    return(
        <>
            <span>✅</span>
            <h1>{title}</h1>
        </>
    )
}