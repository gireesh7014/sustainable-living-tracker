// Register user
document.getElementById('registerForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  });

  const data = await response.json();
  document.getElementById('registerMessage').textContent = data.message;
});

// Login user
document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  document.getElementById('loginMessage').textContent = data.message;
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
});

// Calculate footprint
document.getElementById('footprintForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const transport = document.getElementById('transport').value;
  const energy = document.getElementById('energy').value;
  const waste = document.getElementById('waste').value;
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:5000/api/footprint/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ transport, energy, waste })
  });

  const data = await response.json();
  document.getElementById('footprintMessage').textContent = data.message;

  if (data.footprint) {
    const totalFootprint = data.footprint.transport + data.footprint.energy + data.footprint.waste;
    document.getElementById('footprintResult').textContent = `Your total carbon footprint is: ${totalFootprint}`;
  }
});
