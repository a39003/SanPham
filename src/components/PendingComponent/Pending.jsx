import { Spin } from "antd";
import React from "react";

const Peding = ({children, isPending, delay = 200}) => {
    return (
        <Spin spinning={isPending} delay={delay}>
            {children}
        </Spin>
    )
}

export default Peding