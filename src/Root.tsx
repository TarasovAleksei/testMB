import React from "react";
import {Modal} from "./Modal";
import {Invites} from "./Invites";

interface State {
    invites: string[];
    opened: boolean;
}


export class Root extends React.Component<{}, State> {
    public readonly state: State = {
        invites: [],
        opened: false
    };

    public toggle(opened: boolean) {
        this.setState(() => ({...this.state, opened}))
    }

    public invite(name: string) {
        this.setState(({invites}) => {
            name &&
            invites.push(name);
            return {invites};
        });
    }

    public render() {
        return (
            <>
                <button onClick={() => this.toggle(true)}>Open invites list</button>
                <Modal opened={this.state.opened} onClose={() => this.toggle(false)}>
                    <Invites
                        invites={this.state.invites}
                        onAdd={this.invite.bind(this)}
                    />
                </Modal>
            </>
        );
    }
}
