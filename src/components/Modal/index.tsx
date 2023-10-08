"use client";

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

type ModalProps = {
  open: boolean;
  dismissible?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Modal: React.FC<ModalProps> = ({ open, dismissible = true, children, className }) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);
    }
  }, [open]);

  useEffect(() => {
    if (!open && dismissible) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [open, dismissible]);

  if (!visible) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className={classNames(["modal", className])}>
        {children}
      </div>
    </div>
  );
};

export default Modal;