import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  image: string
  to: string
}

export const Card: FC<Props> = (props): JSX.Element => (
  <Link 
    className="rounded-lg border overflow-hidden hover:scale-105 transition-all duration-150 ease-in animate-fade"
    to={props.to}
  >
    <img src={props.image} className="w-full object-cover" loading="lazy"/>
  </Link>
)