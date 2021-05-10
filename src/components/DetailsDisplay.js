export default function DetailsDisplay(props){
    return (
        <div>
            {JSON.stringify(props.data, null, 2)}
        </div>
    )
}