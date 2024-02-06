export default function SideBar({sideStatus}){


    return(
        <>
            <div className={`sidebar ${sideStatus ===1 ? 'active': '' } `}>
                
            </div>
        </>
    )
}