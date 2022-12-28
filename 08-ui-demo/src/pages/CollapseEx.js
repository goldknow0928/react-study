import React, { memo } from "react";
import Collapse from "../components/Collapse";

// 표시할 내용(데이터)
const content = [
    {
        title: "Open Collapsible",
        content: "text text text text text text text text text text text text text text text text text text text text text text text text text",
    },
    {
        title: "Open Collapsible",
        content: "text text text text text text text text text text text text text text text text text text text text text text text text text",
    },
    {
        title: "Open Collapsible",
        content: "text text text text text text text text text text text text text text text text text text text text text text text text text",
    },
    {
        title: "Open Collapsible",
        content: "text text text text text text text text text text text text text text text text text text text text text text text text text",
    },
    {
        title: "Open Collapsible",
        content: "text text text text text text text text text text text text text text text text text text text text text text text text text",
    },
];

const CollapseEx = memo(() => {
    return (
        <div>
            <h2>CollapseEx</h2>
            {content.map(({title, content}, i) => <Collapse key={i} title={title} content={content} />  )}
        </div>
    );
});

export default CollapseEx;
