import react, { ComponentType } from 'react'

export const withInfiniteScroll = <P extends injectedProps>(WrappedComponent: ComponentType<P>) => {
    
}


type injectedProps = {
    lastElementRef: HTMLElement | null;
}