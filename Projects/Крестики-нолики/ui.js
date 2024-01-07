// Функция для отрисовки игрового поля
function renderBoard(board) {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
  
    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.textContent = cell;
        cellElement.dataset.row = rowIndex;
        cellElement.dataset.column = colIndex;
  
        boardElement.appendChild(cellElement);
      });
    });
  }
  
  // Функция для обработки клика по ячейке
  function handleCellClick(event) {
    const row = event.target.dataset.row;
    const column = event.target.dataset.column;
  
    // Ваш код для обработки клика
  }
  
  // Назначение обработчика клика на доску
  document.getElementById('board').addEventListener('click', handleCellClick);
  
  // Вызов функции startGame при загрузке страницы
  window.addEventListener('DOMContentLoaded', startGame);