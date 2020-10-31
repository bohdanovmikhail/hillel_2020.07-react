import React from 'react';
import cn from 'classnames';

export class MainPage extends React.Component<IProps, IState> {
    public state: IState = {
        contacts: [
            { id: '1', name: 'Contact 1' },
            { id: '2', name: 'Contact 2' },
            { id: '3', name: 'Contact 3' },
        ],
        selected: [],
    };

    public render() {
        const { contacts, selected } = this.state;
        console.log(selected);

        return (
            <div>
                {contacts.map(contact => (
                    <div key={contact.id} className={cn({ selected: selected.includes(contact.id) })}>
                        <input type="checkbox" onChange={this.toggleContact(contact.id)} />
                        {contact.name}
                    </div>
                ))}
            </div>
        );
    }

    private toggleContact(id) {
        return () => {
            const { selected } = this.state;

            if (selected.includes(id)) {
                this.setState({
                    selected: selected.filter(cId => cId !== id),
                });
            } else {
                this.setState({
                    selected: [
                        ...selected,
                        id,
                    ],
                });
            }
        };
    }
}

interface IProps {
}

interface IState {
    contacts: IContact[];
    selected: string[];
}

interface IContact {
    id: string;
    name: string;
}
