interact('.draggable')
  .draggable({
    // Other draggable options
    onmove: dragMoveListener,
    onend: dragEndListener,
    
    // Exclude certain selectors from being draggable
    ignoreFrom: 'input, textarea'
  });
