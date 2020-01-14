import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

import './ErrorBoundary.scss'

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
            const { error } = this.state;
            const { innerComponent } = this.props;

            return (
                <>
                    {
                        innerComponent ?
                            <div className="error-container">
                                <h1 className="error-container__title">{`Error ${error.code}`}</h1>
                                <div className="error-container__description">
                                    <p>{error.statusText}</p>
                                    <p>{error.message}</p>
                                </div>
                            </div >
                            :
                            <Modal open={true}>
                                <Modal.Header>
                                    <h1>{`Error ${error.code}`}</h1>
                                </Modal.Header>
                                <Modal.Content>
                                    <p>{error.statusText}</p>
                                    <p>{error.message}</p>
                                </Modal.Content>
                            </Modal>
                    }
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;