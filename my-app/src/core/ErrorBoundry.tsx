import React from 'react'

export default class ErrorBoundry extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state =  { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: any) {
        return {
            hasError: true,
            error
        }
    }

    render() {
        return this.state.hasError ? this.props.fallback : this.props.children;
    }
}

 