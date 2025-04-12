
  // Función para actualizar los precios
  function actualizarPrecios() {
      const planToggle = document.getElementById('planToggle');
      const precios = document.querySelectorAll('.price');

      precios.forEach(precio => {
          const monthly = precio.querySelector('.monthly');
          const annual = precio.querySelector('.annual');
          const period = precio.querySelector('.period');

          if (planToggle.checked) {
              // Mostrar precio anual
              monthly.style.display = 'none';
              annual.style.display = 'inline-block';
              period.textContent = '/año';
          } else {
              // Mostrar precio mensual
              monthly.style.display = 'inline-block';
              annual.style.display = 'none';
              period.textContent = '/mes';
          }
      });
  }

  // Inicializar los precios
  actualizarPrecios();

  // Agregar evento al toggle
  const planToggle = document.getElementById('planToggle');
  if (planToggle) {
      planToggle.addEventListener('change', actualizarPrecios);
  };