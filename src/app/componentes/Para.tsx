export default function Para({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <p>{children}</p>
    )
}