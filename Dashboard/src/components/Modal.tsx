import React, { Component } from 'react';
import PropTypes from 'prop-types';

export interface ComponentProps {
    onConfirm?: Function;
    item: object;
    onClose: Function;
    extraClasses?: string;
    zIndex: number;
    title?: string;
    body?: object;
}

const composableComponent: Function = (ComposedComponent: $TSFixMe) => {
    class Modal extends Component<ComponentProps> {
        constructor(props: $TSFixMe) {
            super(props);

            this.props = props;
            this.onClose = this.onClose.bind(this);
            this.onConfirm = this.onConfirm.bind(this);
        }
        onClose = (value: $TSFixMe) => {

            if (this.props.item.onClose) {

                this.props.item.onClose(value);

                this.props.onClose(this.props.item);
            } else {

                this.props.onClose(this.props.item);
            }
        };
        onConfirm = (value: $TSFixMe) => {
            

            if (this.props.item.onConfirm) {

                this.props.item.onConfirm(value).then(

                    () => this.props.onClose(this.props.item),
                    () => { }
                );
            } else {

                this.props.onClose(this.props.item);
            }
        };
        override render() {

            const { zIndex } = this.props;

            const { extraClasses } = this.props.item;

            const mainClass:string = `${extraClasses || ''} modal-dialog-view`;
            const modalContainerStyle: $TSFixMe = {
                overflowX: 'auto',
                overflowY: 'scroll',
                display: 'block',
                top: '0px',
            };
            return (
                <div
                    className={mainClass}
                    style={{
                        zIndex: (zIndex + 1) * 10000,
                    }}
                >
                    <div
                        className="modal_overlay"
                        style={{
                            top: 0,
                            opacity: 1,
                            transform: 'none',
                            display: 'block',
                            pointerEvents: 'auto',
                            zIndex: 20,
                        }}
                    >
                        <div
                            className="modal_container"

                            style={modalContainerStyle}
                        >
                            <ComposedComponent
                                closeThisDialog={this.onClose}
                                confirmThisDialog={this.onConfirm}

                                title={this.props.title}

                                body={this.props.body}
                                propArr={

                                    this.props.item.propArr

                                        ? this.props.item.propArr
                                        : []
                                }
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }

    Modal.propTypes = {
        onConfirm: PropTypes.func,
        item: PropTypes.object.isRequired,
        onClose: PropTypes.func.isRequired,
        extraClasses: PropTypes.string,
        zIndex: PropTypes.number.isRequired,
        title: PropTypes.string,
        body: PropTypes.object,
    };


    Modal.displayName = 'Modal';

    return Modal;
};

export default composableComponent;
