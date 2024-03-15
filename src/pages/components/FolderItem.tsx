import React from 'react';
import Draggable from 'react-draggable';
import { Rnd } from 'react-rnd';

interface DraggableDivProps {
  id: string;
  isVisible: boolean;
  onClose: (id: string) => void;
  children: React.ReactNode;
}

const FolderItem = ({ id, isVisible, onClose, children }: DraggableDivProps) => {
  if (!isVisible) return null;

  return (
    <Draggable>
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200,
        }}
        minWidth={200}
        minHeight={100}
        bounds="parent"
      >
        <div>
          {children}
        </div>
      </Rnd>
    </Draggable>
  );
};

export default FolderItem;
