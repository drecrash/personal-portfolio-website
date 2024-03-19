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
        <div>
          {children}
        </div>

    </Draggable>
  );
};

export default FolderItem;
