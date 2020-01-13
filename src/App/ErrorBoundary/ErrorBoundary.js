import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // log error
    }

    render() {
        if (this.state.hasError) {
            return (
                <Modal open={true}>
                    <Modal.Header>
                        <h1>Error ocurred</h1>
                    </Modal.Header>
                    <Modal.Content>
                        <p>{this.state.error.Code}</p>
                        <p>{this.state.error.Message}</p>
                    </Modal.Content>
                </Modal>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;