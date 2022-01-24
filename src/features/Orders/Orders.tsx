import cn from "classnames";
import * as React from "react";

interface IProps {
  className?: string;
}

const Orders = ({ className }: IProps) => {
  return <div className={cn(className)}>Orders goes here...</div>;
};

export default Orders;
