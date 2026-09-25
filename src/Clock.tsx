import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  render() {
    const today = new Date();

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
