import React, { useRef, useState } from 'react';

const ImageAndTextEditor = () => {
  const inputRef = useRef(null);
  const editableDivRef = useRef(null);
  const [showCancelButton, setShowCancelButton] = useState(false);
  const [showImagem,setShowImagem] = useState("none")

  const handlePaste = (e) => {
    e.preventDefault();
    setShowImagem("block")
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        clearContent();
        handleImage(items[i].getAsFile());
        addCancelButton();
        addObservationInput();
        break;
      }
    }
  };

  const handleImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        editableDivRef.current.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearContent = () => {
    setShowCancelButton(false);
    editableDivRef.current.innerHTML = ''; // Limpa a div editável
  };

  const addCancelButton = () => {
    setShowCancelButton(true);
  };

  const removeImageAndInput = () => {
    setShowCancelButton(false);
    editableDivRef.current.innerHTML = ''; // Limpa a div editável
    setShowImagem("none")
  };

  const addObservationInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        style={{
          border: '1px solid #ccc',
          padding: '5px',
          outline: 'none',
          width: 'calc(100% - 170px)', // Ajuste a largura conforme necessário
          marginRight: '10px',
        }}
        ref={inputRef}
        onPaste={handlePaste}
      />
      <div
        contentEditable
        style={{
          display:showImagem ,
          border: '1px solid #ccc',
          minHeight: '150px',
          padding: '5px',
          outline: 'none',
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          width: '150px', // Ajuste a largura conforme necessário
        }}
        onPaste={handlePaste}
        ref={editableDivRef}
      ></div>
      {showCancelButton && (
        <button onClick={removeImageAndInput} style={{ marginTop: '5px' }}>
          Cancelar
        </button>
      )}
    </div>
  );
};

export default ImageAndTextEditor;
