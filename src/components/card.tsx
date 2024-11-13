import { CardPropsComponent } from "@/interfaces/CardProps";

export default function Card({ task, status }: CardPropsComponent) {
  return <div>{task}</div>;
}
