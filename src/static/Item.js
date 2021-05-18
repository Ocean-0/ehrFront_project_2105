
export function Item(props){
    console.log(props);
    const temp = [];
    const {label,arr} = props;
    const dataList = arr.length > 0? (
        arr.map(function(ar){

            return (
                <div>ar</div>
            )
        })
    ) : (
        <div>未查询到数据</div>
    )
    return (
        <div>Item01</div>
    );
}