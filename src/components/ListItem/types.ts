import { Item } from "../../types/item"

export type Props = {
    item : Item;
    handleChangeListStatus: (done : boolean, id: number)=> void;

}
export type ContainerProps = {
    done: boolean;
}