const cells = document.querySelectorAll('[data-cell]');
let currentPlayer = 'X';
let gameActive = true;

cells.forEach(cell => {
  cell.addEventListener('click', cellClick, { once: true });
});

function cellClick(e) {
  const cell = e.target;
  if (!gameActive || cell.textContent !== '') return;

  cell.textContent = currentPlayer;
  checkWin();
  swapPlayer();
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  winningCombinations.forEach(combination => {
    const [a, b, c] = combination;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      gameActive = false;
      alert(`Победил игрок ${currentPlayer}!`);
    }
  });
}

function swapPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

const restartButton = document.getElementById('restartBtn');
restartButton.addEventListener('click', restartGame);

function restartGame() {
    cells.forEach(cell => {
      cell.textContent = ''; // Очищаем содержимое ячеек
      cell.removeEventListener('click', cellClick); // Удаляем обработчик события клика
      cell.addEventListener('click', cellClick, { once: true }); // Добавляем новый обработчик события клика
    });
  
    gameActive = true; // Устанавливаем состояние игры на начальное
    currentPlayer = 'X'; // Устанавливаем начального игрока
  }
  
