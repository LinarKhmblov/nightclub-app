import { FC } from "react";

interface IPersonProps {
    name: string;
    sex: string;
    motion?: string;
}
 
export const Person: FC<IPersonProps> = ({name, sex,  motion = ''}: IPersonProps): JSX.Element => {
    return (
        <div data-tooltip={`${name}`}  className={`body ${motion} ${sex} tooltip-target`}>
            <div className="head"></div>
            <div className="trunk">
                <div className="arms"></div>
            </div>
            <div className="legs"></div>
        </div>
    )
};