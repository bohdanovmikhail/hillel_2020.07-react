import React from 'react';
import cn from 'classnames';
import './Root.scss';

function Box({ isSelected, bgColor, ...other }: IBox & any) {
    return (
        <div
            {...other}
            className={cn('box', { isSelected })}
            style={{ backgroundColor: bgColor }}
        />
    );
}

export class Root extends React.PureComponent<IProps, IState> {
    public state: IState = {
        boxes: [],
        message: null,
    };

    constructor(props: any) {
        super(props);

        this.checkBox = this.checkBox.bind(this);

        this.state.boxes = props.boxes;
    }

    public render() {
        const { message } = this.state;
        const messageEl = message && (
            <div>{message}</div>
        );

        return (
            <div>
                {messageEl}
                <button onClick={this.checkBox}>Check</button>

                <div className="boxWrapper">
                    {this.renderBoxes()}
                </div>
            </div>
        );
    }

    private renderBoxes() {
        return this.state.boxes
            .map((box: IBox, index: number) => (
                <Box
                    {...box}
                    key={index}
                    onClick={this.clickBoxHandler(index)}
                />
            ));
    }

    private clickBoxHandler(index: number) {
        const { boxes } = this.state;
        const box = boxes[index];

        return () => {
            boxes[index] = {
                ...box,
                isSelected: !box.isSelected,
            };

            this.setState({
                boxes: [...boxes],
            });
        };
    }

    private checkBox(): void {
        const { boxes } = this.state;
        const isAllBlueSelected = boxes
            .filter(box => box.bgColor === 'blue')
            .every(box => box.isSelected);

        if (isAllBlueSelected) {
            this.setState({
                message: 'All box cleared',
                boxes: boxes.map(box => ({
                    ...box,
                    isSelected: false,
                })),
            });

            setTimeout(() => {
                this.setState({ message: null });
            }, 3000);
        }
    }
}

interface IProps {
    boxes: IBox[];
}

interface IState {
    boxes: IBox[];
    message: string;
}

export interface IBox {
    bgColor?: string;
    isSelected: boolean;
}
