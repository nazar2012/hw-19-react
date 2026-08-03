import { memo } from "react";

function Button({ onClick }) {
    return (
        <button className="load" onClick={onClick} type="button">Load more</button>
    )
}

export default memo(Button)