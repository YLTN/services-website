export default function Wrapper({ children } : { children: React.ReactNode }) {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center my-8">
            {children}
        </div>
    )
}