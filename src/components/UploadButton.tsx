'use client';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { useState } from 'react';
import { Button } from './ui/button';

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(v) => {
          if (!v) setIsOpen(v);
        }}
      >
        <DialogTrigger onClick={() => setIsOpen(true)} asChild>
          <Button>Upload Files</Button>
        </DialogTrigger>

        <DialogContent>Upload your files here...</DialogContent>
      </Dialog>
    </>
  );
};

export default UploadButton;
