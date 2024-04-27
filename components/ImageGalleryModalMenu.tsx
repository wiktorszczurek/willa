import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

interface ImageGalleryModalProps {
  isOpen: boolean;
  images: { title: string; img: string }[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ImageGalleryModalMenu: React.FC<ImageGalleryModalProps> = ({
  isOpen,
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrevious,
}) => {
  // Określenie, że ref może być typu HTMLDivElement lub null
  const initialFocusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || selectedIndex === null) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      initialFocus={initialFocusRef}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />

      <div className="relative flex justify-center min-h-screen p-4">
        <button
          className="absolute right-3 top-0 text-white text-5xl z-50"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl p-1 z-20"
          onClick={onPrevious}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>

        <div
          className="flex items-center justify-center max-h-full w-full p-8"
          ref={initialFocusRef} // Przeniesienie ref do diva
          tabIndex={0} // Dodanie tabIndex, aby div był fokusowalny
        >
          <Image
            src={images[selectedIndex].img}
            alt={images[selectedIndex].title}
            layout="fill"
            objectFit="contain"
            className="block max-h-[90vh] m-auto p-8"
          />
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white p-1 text-3xl z-20"
          onClick={onNext}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </div>
    </Dialog>
  );
};

export default ImageGalleryModalMenu;
