import React from 'react';

interface GiftBoxSidesProps {
  name: string;
}

export function GiftBoxSides({ name }: GiftBoxSidesProps) {
  return (
    <>
      <div className="bow" />
      <div className="side front" />
      <div className="side back" />
      <div className="side left" />
      <div className="side right" />
      <div className="side top">
        <span className="to">
          <span className="name">{name}</span>
        </span>
      </div>
      <div className="side bottom" />
    </>
  );
}